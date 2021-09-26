// select the container that is inside the first container
const firstContainer = document.querySelector('body > .container.first > .container')

// giving the first container the class active when click
firstContainer.onclick = ()=>{
    firstContainer.classList.toggle('active')
}



const changeVeiwSize = ()=>{
    document.body.style.height = window.innerHeight + "px"
}
changeVeiwSize()
window.onresize = changeVeiwSize



/* contorling loading page */
document.addEventListener('DOMContentLoaded', ()=>{
    console.log(document.body.classList.value)
    document.body.classList.remove('loading')
    console.log('Finish loading ..')

})