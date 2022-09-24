const kingsAbouts = document.querySelectorAll('body > .container.third > .kings-abouts > .king-about')
const kingsAboutCon = document.querySelector('body > .container.third > .kings-abouts ')


const clas = "active";
 const cas = document.querySelector('.container.third > .kings-imgs')
 const casTriggers = cas.querySelectorAll('.triggers > div')
 const casItems = cas.querySelectorAll('.king-img')
 
 
 // we do all our shit after the dom initalized 
 document.addEventListener("DOMContentLoaded",()=>{

    // After Btn
     casTriggers[1].onclick = ()=>{
 
         const middle = cas.querySelector(`.${clas}`)
         const afterMiddle = cas.querySelectorAll(`.king-img.${clas} ~ .king-img`)
         const beforeMiddle = cas.querySelectorAll(`.king-img:not(.${clas}, .right)`)
 
         // explaining would be down man
         console_log_statusOfCases(beforeMiddle, afterMiddle, middle)
 
         afterMiddle.length && 
             setCasItem(beforeMiddle, middle, afterMiddle, "left", afterMiddle[0])
     }

    //  before btn
     casTriggers[0].onclick = ()=>{
 
         const middle = cas.querySelector(`.${clas}`)
         const afterMiddle = cas.querySelectorAll(`.king-img.${clas} ~ .king-img`)
         const beforeMiddle = cas.querySelectorAll(`.king-img:not(.${clas}, .right)`)
 
         console_log_statusOfCases(beforeMiddle, afterMiddle, middle)

         beforeMiddle.length &&
             setCasItem(beforeMiddle, middle, afterMiddle, "right", beforeMiddle[beforeMiddle.length - 1])
     }

     const setCasItem = (beforeMiddle, middle, afterMiddle, direction, targetedToBeMiddle) =>{
         
         // we clear all the item to be with only item class
         casItems.forEach(el=>deleteClasses(el))
 
         // this would get the middle one to be to the direction after switch
         middle.classList.add(direction)
 
         // this will give the the els after the middle a class with left 
         beforeMiddle.forEach(el=>el.classList.add('left'))
 
         // this will give the the els before the middle a class with right 
         afterMiddle.forEach(el=>el.classList.add('right'))
 
         // this will delete all the classes that got assinged to the targeted cas and give a class of middle
         deleteClasses(targetedToBeMiddle).classList.add(clas)
         kingsAbouts.forEach(e=>e.classList.remove('active'))
         kingsAboutCon.querySelector(`.${targetedToBeMiddle.getAttribute('data-to')}`).classList.add('active')
     }
 
 
     const deleteClasses = (el)=>{
         el.classList.remove(clas)
         el.classList.remove('right')
         el.classList.remove('left')
         return el
     }
 
     // this function uses to console.log(the status of the middle , after, before middle )
     const console_log_statusOfCases = (beforeMiddle, afterMiddle, middle)=>{
         console.log("before : ", beforeMiddle)
         console.log("after : ", afterMiddle)
         console.log("middle : ", middle)
     }
 })




 
/**
 * Not gonna say a lot in this but I already made a explained project like this
 * try To visit https://github.com/khaledYS/carousel-thatIsMore-dynamic-
 */