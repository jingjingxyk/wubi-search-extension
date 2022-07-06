let context_menu_search_engin = () => {

    chrome.contextMenus.onClicked.addListener(
        (info) => {
            console.log(info)
            console.log(info.selectionText)
            if (info.selectionText.length > 0) {
                let url = null;

                if (info.menuItemId.search(/custom-wubi-98-wangma-search-/) !== -1) {
                    url = goToWangMaWuBi98Search(info.selectionText)
                }


               if (info.menuItemId.search(/custom-wubi-98-iamwawa-search-1/) !== -1) {
                    url = goToiamwawaSearch(info.selectionText);
                }
                if (info.menuItemId.search(/custom-xpcha-search-/) !== -1) {
                    url = goToxpchaSearch(info.selectionText);
                }
                if (info.menuItemId.search(/custom-wubizhijia-search-1/) !== -1) {
                    url = goTowubizhijiaSearch(info.selectionText);
                }
                if (info.menuItemId.search(/custom-fanwenzhan-search-1/) !== -1) {
                    url = goTofanwenzhanSearch(info.selectionText);
                }

                if (url) {
                    chrome.tabs.create(
                        {
                            // url: gotToGoogleSearch(info.selectionText),
                            url: url,
                        },
                        (tab) => {
                            console.log(tab);
                        }
                    );
                }

            }


        }
    )

// navigator.userAgent
    let goToWangMaWuBi98Search = (word) => {
        word = word.split('')[0]
        //return `http://www.wangma.net.cn/search.aspx?sm=7&extension-define-keyword=${word}`
        return `http://www.wangma.net.cn/search.aspx?sm=7#extension-define-keyword=${word}`
    }
    let goToiamwawaSearch=(word)=>{
        return `https://www.iamwawa.cn/wubi.html#extension-define-keyword=${word}`
    }
    let goToxpchaSearch=(word)=>{
        return `https://wubi.xpcha.com/#extension-define-keyword=${word}`
    }

     //http://hy.httpcn.com/html/wubi/26/PWUYCQAZILTBPWCQAZ/
     // https://www.4qx.net/m/wubi_results.php

     // https://search.cidianwang.com/?m=0&y=0&t=3&q=%E4%BA%94%E7%AC%94%E6%9F%A5%E8%AF%A2

     // http://www.daziba.cn/tools/wbcx.aspx

    // https://www.iamwawa.cn/wubi.html
    //https://www.qqxiuzi.cn/bianma/wubi.php
    // https://qq.ip138.com/wb/wb.asp

    //https://www.fanwenzhan.com/wubi/6KGo.shtml

    //https://wubizhijia.com/e/search/result/?searchid=2644

    let goTowubizhijiaSearch=(word)=>{
        return `https://wubizhijia.com/#extension-define-keyword=${word}`
    }

    let goTofanwenzhanSearch=(word)=>{
        return `https://www.fanwenzhan.com/wubi/6Ima.shtml#extension-define-keyword=${word}`
    }


    let post_request_builder = (url, params) => {
        console.log(url,params)
        let source = fakePost.toString().replace(/(\n|\t)/gm, '').replace(/\s\s/gm, ' ');
        return `javascript:${source}; fakePost('${url}', ${params});`

    };

    function fakePost(url, params) {
        var form = document.createElement("form");
        form.setAttribute("action", url);
        form.setAttribute("method", "post");

        for (let key in params) {
            let hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);
            form.appendChild(hiddenField);
        }
        document.body.appendChild(form);
        form.submit();
    }

}

export {context_menu_search_engin}
