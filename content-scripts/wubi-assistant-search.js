
let init = () => {


}

(async () => {

    let {getParameterValue} = await import(chrome.runtime.getURL("/content-scripts/common.js"));

    let keyword = getParameterValue('extension-define-keyword');
    if (keyword) {
        let input_text_box = document.querySelector('#textfield');
        if (input_text_box) {
            input_text_box.setAttribute('value', keyword)
        }
    }

})();
