import {getParameterValue} from "/content-scripts/common.js";


let init = () => {

    let keyword = getParameterValue('extension-define-keyword');
    if (keyword) {
        let input_text_box = document.querySelector('#textfield');
        if (input_text_box) {
            input_text_box.setAttribute('value', keyword)
        }
    }
}

(async () => {

    init()

})();
