import { context_menu_search_engin } from './context-menus-search-engine.js'

let context_menu_init=()=>{
    chrome.contextMenus.create(
        {
            checked: true,
            contexts: ['selection'],
            documentUrlPatterns: ["https://*/*", "http://*/*"],
            enabled: true,
            title: "王码五笔查询",
            id: 'custom-wubi-98-wangma-search-1',
            //  id: 'custom-wubi-98-wangma-search-'+(new Date()).toISOString()
        },
        (info) => {
            console.log(info)
        }
    );
    chrome.contextMenus.create(
        {
            checked: true,
            contexts: ['selection'],
            documentUrlPatterns: ["https://*/*", "http://*/*"],
            enabled: true,
            title: "五笔编码查询1",
            id: 'custom-wubi-98-iamwawa-search-1',
            //  id: 'custom-wubi-98-wangma-search-'+(new Date()).toISOString()
        },
        (info) => {
            console.log(info)
        }
    );
    chrome.contextMenus.create(
        {
            checked: true,
            contexts: ['selection'],
            documentUrlPatterns: ["https://*/*", "http://*/*"],
            enabled: true,
            title: "五笔编码查询2",
            id: 'custom-xpcha-search-1',
            //  id: 'custom-wubi-98-wangma-search-'+(new Date()).toISOString()
        },
        (info) => {
            console.log(info)
        }
    );    chrome.contextMenus.create(
        {
            checked: true,
            contexts: ['selection'],
            documentUrlPatterns: ["https://*/*", "http://*/*"],
            enabled: true,
            title: "五笔之家查询",
            id: 'custom-wubizhijia-search-1',
            //  id: 'custom-wubi-98-wangma-search-'+(new Date()).toISOString()
        },
        (info) => {
            console.log(info)
        }
    );
    chrome.contextMenus.create(
        {
            checked: true,
            contexts: ['selection'],
            documentUrlPatterns: ["https://*/*", "http://*/*"],
            enabled: true,
            title: "五笔之家查询3",
            id: 'custom-fanwenzhan-search-1',
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
