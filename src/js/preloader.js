const
    preloaderContainer = document.querySelector('.preloader_container'),
    preloaderDots = document.querySelectorAll('.preloader_dot')

let i = 0

const preloaderInterval = setInterval(()=>{
    preloaderDots[i].classList.toggle('dot-animated')

    i++

   i === 3 && (i = 0)

}, 200)

setTimeout(()=>{
    // clearInterval(preloaderInterval)

    preloaderDots.forEach(dot =>{
        setTimeout(()=>{
            dot.style.opacity = '0'
        }, 2000)
    })

    setTimeout(()=>{
        preloaderContainer.style.opacity = '0'
    }, 3000)

    setTimeout(()=>{
        
        preloaderContainer.style.display = 'none'
    }, 6000)

}, 3000)

onresize = ()=>{
    location.reload()
}
