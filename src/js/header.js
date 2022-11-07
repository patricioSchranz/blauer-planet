const 
    header = document.querySelector('.unique_header'),
    headerHeight = header.offsetHeight

// console.log('the header height =>', headerHeight)

let 
    scrollPosition = 0
    surfState = 0,
    breakPointHeight = window.innerHeight * 0.2

window.addEventListener('scroll', ()=>{
    let currentScrollPosition = scrollY

    // console.log('scroll position', scrollPosition)
    // console.log('current scroll position', currentScrollPosition)

    // scrollPosition > currentScrollPosition
    // ? console.log('scrolls up')
    // : console.log('scrolls down')

    currentScrollPosition >= breakPointHeight && (surfState = 1)

    if(surfState === 1){
        scrollPosition > currentScrollPosition
        ? header.style.top = `0`
        : header.style.top = `-90px`
    
        scrollPosition = currentScrollPosition
    }
  
})

