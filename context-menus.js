import { context_menu_search_engin } from './context-menus-search-engine.js'

let context_menu_init=()=>{
    chrome.contextMenus.create(
        {
            checked: true,
            contexts: ['selection'],
            documentUrlPatterns: ["https://*/*", "http://*/*"],
            enabled: true,
            title: "五笔查询",
            id: 'custom-wubi-98-wangma-search-1',
            //  id: 'custom-wubi-98-wangma-search-'+(new Date()).toISOString()
        },
        (info) => {
            console.log(info)
        }
    );


}


export {
    context_menu_init,
    context_menu_search_engin
}
