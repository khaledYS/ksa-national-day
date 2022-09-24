// select the container that is inside the first container
const firstContainer = document.querySelector('body > .container.first > .container')

// giving the first container the class active when click
firstContainer.onclick = ()=>{
    firstContainer.classList.toggle('active')
}






/**
 * This shunk of code to give the body a height by px instead using vh 
 * bcz vh isn't supported alot in iphone and some sort of phones
 */
const changeVeiwSize = ()=>{
    document.body.style.height = window.innerHeight + "px"
}
changeVeiwSize()
window.onresize = changeVeiwSize



