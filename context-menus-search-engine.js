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
        return `http://www.wangma.net.cn/search.aspx?sm=7&extension-define-keyword=${word}`
    }

     //http://hy.httpcn.com/html/wubi/26/PWUYCQAZILTBPWCQAZ/
     // https://www.4qx.net/m/wubi_results.php



}

export {context_menu_search_engin}
