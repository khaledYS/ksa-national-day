/**
 * the colsInfo will contain the col one by one 
 * the cols const it will contain the cols divs only
 * the aud will be the aud el
 * the controlers is an array contains the play button and repeat button
*/
const colsInfo = []
const cols = document.querySelectorAll('body > .sec > .lyrics .col')
const aud = document.querySelector('body > .sec > audio')
const controlers = document.querySelectorAll('body > .sec > .controlers > div')
cols.forEach(col => {
    const toPush ={
        time : col.getAttribute('time'),
        col : col
    }

    // push it to the colsInfo array
    colsInfo.push(toPush)
});



// the controlers
// the play button
controlers[0].onclick = ()=>{
    let activeCol = document.querySelector('body > .sec > .lyrics .col.active')
    console.log(activeCol)

    if(!aud.paused){
        controlers[0].classList.remove('playing')
        aud.pause()
        !activeCol.classList.contains('stop-animation') && 
        activeCol.classList.add('stop-animation')
    }else{
        controlers[0].classList.add('playing')
        aud.play()
        activeCol.classList.remove('stop-animation')
        console.log("did",activeCol)
    }
}

// the repeat button
controlers[1].onclick = ()=>{
    aud.currentTime = 0
    aud.play()
    controlers[0].classList.add('playing')
}




aud.ontimeupdate = ()=>{
    const dur = aud.currentTime.toFixed(1)
    console.log(dur)
    const find = colsInfo.find(e=> Number(dur).toFixed() == e.time)
    if(find){
        cols.forEach(e=>e.classList.remove('active'))
        find.col.classList.add('active')
    }   
}