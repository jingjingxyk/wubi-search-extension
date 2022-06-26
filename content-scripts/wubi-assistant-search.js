
let init = () => {


}

(async () => {

    let {getParameterValue,getHashValue} = await import(chrome.runtime.getURL("/content-scripts/common.js"));

    let keyword = getHashValue('extension-define-keyword');
    console.log(keyword)
    if (keyword) {
        let input_text_box = document.querySelector('#textfield');
        if (input_text_box) {
            input_text_box.setAttribute('value', keyword)
            let input_verify_code=document.querySelector('#textfield2')
            if(input_verify_code)
            {
                input_verify_code.addEventListener('keydown',event=>{
                    if(event.keyCode=== 13)
                    {
                        let button=document.querySelector('#button')
                        if(button)
                        {
                            button.click();
                        }
                        event.preventDefault();
                    }
                })
            }
        }
    }

})();
