let context_menu_search_engin = () => {

    chrome.contextMenus.onClicked.addListener(
        (info) => {
            console.log(info)
            console.log(info.selectionText)
            if (info.selectionText.length > 0) {
                let url = null;

                if (info.menuItemId.search(/custom-wubi-98-wangma-search-/) !== -1) {
                    url = toToWangMaWuBi98Search(info.selectionText)
                }

                   if (info.menuItemId.search(/custom-hao86-search-/) !== -1) {
                    url = goToHao86Search(info.selectionText);
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
    let toToWangMaWuBi98Search = (word) => {
        word = word.split('')[0]
        //return `http://www.wangma.net.cn/search.aspx?sm=7&extension-define-keyword=${word}`
        return `http://www.wangma.net.cn/search.aspx?sm=7#extension-define-keyword=${word}`
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

}

export {context_menu_search_engin}
