const kingsImgs = document.querySelectorAll('body > .container.third > .kings-imgs > .king-img ')
const kingsAbouts = document.querySelectorAll('body > .container.third > .kings-abouts > .king-about')

kingsImgs.forEach((kingImg, kingImgIndex)=>{
    kingImg.onclick = ()=>{
        if(!kingImg.classList.contains('active')){

            // clear any divs kings that has class active
            kingsAbouts.forEach(kingAbout=>kingAbout.classList.remove('active'))
            kingsImgs.forEach(kingImg=>kingImg.classList.remove('active'))

            // add the class active to the targeted king img and about
            kingImg.classList.add('active')
            document.querySelector(`body > .container.third > .kings-abouts > .king${kingImgIndex}-about`).classList.add('active')

            // scroll to the img when cilcking on it if it weren't on the enough view
            kingImg.scrollIntoView() 
        }else if (kingImg.classList.contains('active')){
            kingsAbouts.forEach(kingAbout=>kingAbout.classList.remove('active'))
            kingsImgs.forEach(kingImg=>kingImg.classList.remove('active'))
        }
    }
})


 const cas = document.querySelector('.contaner.third > .kings-img')
 const clas = "active";
 const casTriggers = cas.querySelectorAll('.contaner.third > .triggers > i')
 const casItems = cas.querySelectorAll('.king-img')
 
 
 // we do all our shit after the dom initalized 
 document.addEventListener("DOMContentLoaded",()=>{

     casTriggers[1].onclick = ()=>{
 
         const middle = cas.querySelector(`.${clas}`)
         const afterMiddle = cas.querySelectorAll(`.${clas} ~ div.item`)
         const beforeMiddle = cas.querySelectorAll('.item:not(.middle, .right)')
 
         // explaining would be down man
         console_log_statusOfCases(beforeMiddle, afterMiddle, middle)
 
         afterMiddle.length && 
             setCasItem(beforeMiddle, middle, afterMiddle, "left", afterMiddle[0])
     }

     casTriggers[0].onclick = ()=>{
 
         const middle = cas.querySelector(`.${clas}`)
         const afterMiddle = cas.querySelectorAll(`.${clas} ~ div.item`)
         const beforeMiddle = cas.querySelectorAll('.item:not(.middle, .right)')
 
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
         deleteClasses(targetedToBeMiddle).classList.add("middle")
     }
 
 
     const deleteClasses = (el)=>{
         el.classList.remove('middle')
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