const bigContainer = document.querySelector('.big-wrapper-index')

const setFullHeight = (element) =>{
    element.style.width = `${window.innerWidth}px`
    element.style.height = `${window.innerHeight}px`
}

setFullHeight(bigContainer)

addEventListener('resize', (event) => {
    console.log('window innerWidth =>', window.innerWidth)
    console.log('window innerHeight =>', window.innerHeight)

    setFullHeight(bigContainer)
});