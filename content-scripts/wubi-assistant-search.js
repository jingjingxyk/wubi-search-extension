let wangma = (keyword) => {

    let input_text_box = document.querySelector('#textfield');
    if (input_text_box) {
        input_text_box.setAttribute('value', keyword)
        let input_verify_code = document.querySelector('#textfield2')
        if (input_verify_code) {
            input_verify_code.addEventListener('keydown', event => {
                if (event.keyCode === 13) {
                    let button = document.querySelector('#button')
                    if (button) {
                        button.click();
                    }
                    event.preventDefault();
                }
            })
        }
    }
}
let iamwawa = (keyword) => {

    let input_text_box = document.querySelector('#tool-text');
    if (input_text_box) {
        input_text_box.setAttribute('value', keyword)
        let button = document.querySelector('#btn-submit')
        if (button) {
            button.click();
        }
    }
}
let xpcha = (keyword) => {
    let input_text_box = document.querySelector('#q');
    if (input_text_box) {
        input_text_box.setAttribute('value', keyword)
        let button = document.querySelector('.button')
        if (button) {
            button.click();
        }
    }
}
let wubizhijia=(keyword)=>{
    let input_text_box = document.querySelector('form[name=searchform] input[name=keyboard]');
    if (input_text_box) {
        input_text_box.setAttribute('value', keyword)
        let button = document.querySelector('form[name=searchform] input[name=submit]')
        if (button) {
            button.click();
        }
    }
}
let fanwenzhan=(keyword)=>{
    let input_text_box = document.querySelector('form[name=s] input[name=keyword]');
    if (input_text_box) {
        input_text_box.setAttribute('value', keyword)
        let button = document.querySelector('form[name=s] .btnSearch')
        if (button) {
            button.click();
        }
    }
}
(async () => {

    let {getParameterValue, getHashValue} = await import(chrome.runtime.getURL("/content-scripts/common.js"));
    let urlOBJ = new URL(location.href)
    console.log(urlOBJ)

    let keyword = getHashValue('extension-define-keyword');
    console.log(keyword)
    if (keyword) {
        keyword = keyword.trim()
        if (keyword) {
            if (urlOBJ.hostname === 'www.iamwawa.cn') {
                iamwawa(keyword)
            }
            if (urlOBJ.hostname === 'www.wangma.net.cn') {
                wangma(keyword)
            }
            if (urlOBJ.hostname === 'wubi.xpcha.com') {
                xpcha(keyword)
            }
            if (urlOBJ.hostname === 'wubizhijia.com') {
                wubizhijia(keyword)
            }
            if (urlOBJ.hostname === 'www.fanwenzhan.com') {
                fanwenzhan(keyword)
            }
        }
    }



})();
