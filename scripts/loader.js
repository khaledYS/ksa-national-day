/* contorling loading page */
document.addEventListener('DOMContentLoaded', ()=>{
    console.log(document.body.classList.value)
    document.body.classList.remove('loading')
    console.log('Finish loading ..')
}, false)