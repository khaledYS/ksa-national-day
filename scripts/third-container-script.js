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