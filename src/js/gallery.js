//--- viewport functions ---
const 
    generallyViewBreakPoint = window.innerHeight * 0.5,
    viewBreakPointBottom = window.innerHeight * 0.8

const isTheElementTopOnTopOfTheViewport = (element)=>{
    const thisBoundingRect = element.getBoundingClientRect()

    return (
        thisBoundingRect.top <= generallyViewBreakPoint
    )
}

const isTheElementTopOnBottomOfTheViewport = (element)=>{
    const thisBoundingRect = element.getBoundingClientRect()

    return (
        thisBoundingRect.top <= viewBreakPointBottom
    )
}

const
    theHeader = document.querySelector('.unique_header'),
    imagesOfTheGallery = document.querySelectorAll('.gallery_gallery_img'),
    lastImageOfTheGallery = document.querySelector('.gallery_gallery_img:last-of-type'),
    imagesArray = Array.from(imagesOfTheGallery),
    theModal = document.querySelector('.gallery_modal'),
    theModalImage = document.querySelector('.gallery_modal_img'),
    viewButton = document.querySelector('.gallery_modal_view'),
    previousButton = document.querySelector('.gallery_modal_previous'),
    nextButton = document.querySelector('.gallery_modal_next'),
    closeButton = document.querySelector('.gallery_modal_close-button')
    
let 
    currentImageIndex,
    viewButtonState = 1

//--- event listener ---

document.addEventListener('scroll', ()=>{
    imagesOfTheGallery.forEach(image =>{
        // console.log(image)
        // console.log('the last image of the gallery', lastImageOfTheGallery)

        if(image === lastImageOfTheGallery){
             isTheElementTopOnBottomOfTheViewport(image) && (image.style.opacity = '1')
        }

         isTheElementTopOnTopOfTheViewport(image) && (image.style.opacity = '1')
    })
})

imagesArray.forEach(image =>{
    image.addEventListener('click', ()=>{
        theHeader.style.zIndex = '-1'
        theModal.style.display = 'flex'

        const 
            thisImageSrc = image.src,
            thisImageIndex = imagesArray.indexOf(image)
            

        // console.log(imagesArray)
        // console.log(thisImageIndex)
        // console.log(thisImageSrc)
        
        currentImageIndex = thisImageIndex

        // console.log(currentImageIndex)

        currentImageIndex || (previousButton.style.display = 'none')
        currentImageIndex === imagesArray.length -1 && (nextButton.style.display = 'none')

        // console.log(imagesArray.length -1)

        theModalImage.src = thisImageSrc
    })
})

closeButton.addEventListener('click', ()=>{
    theModal.style.display = 'none'
    theHeader.style.zIndex = '10'
})

viewButton.addEventListener('click', ()=>{
    if(viewButtonState === 1){
        viewButtonState = 2
        theModalImage.style.objectFit = 'cover'
        viewButton.innerHTML = 'zentrierte Ansicht'
    }
    else if(viewButtonState === 2){
        viewButtonState = 1
        theModalImage.style.objectFit = 'contain'
        viewButton.innerHTML = 'Vollbild'
    } 
})

previousButton.addEventListener('click', ()=>{
    currentImageIndex--
    
    currentImageIndex || (previousButton.style.display = 'none')
    currentImageIndex !== imagesArray.length -1 && (nextButton.style.display = 'flex')

    let
        theImgSrc = imagesArray[currentImageIndex].src

    theModalImage.src = theImgSrc
})

nextButton.addEventListener('click', ()=>{
    currentImageIndex++

    currentImageIndex && (previousButton.style.display = 'flex')
    currentImageIndex === imagesArray.length -1 && (nextButton.style.display = 'none')

    let
        theImgSrc = imagesArray[currentImageIndex].src

    theModalImage.src = theImgSrc
})