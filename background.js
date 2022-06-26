import {
  context_menu_init,
  context_menu_search_engin,
} from "./context-menus.js";


chrome.runtime.onInstalled.addListener(async (details) => {
  context_menu_init();

});

context_menu_search_engin();