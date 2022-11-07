const
    theSections = document.querySelectorAll('.interesting-fact_section'),
    theHeightOfTheWindow = window.innerHeight

function isInViewport(element) {
    const rect = element.getBoundingClientRect();

    // console.log('rect top', rect.top)
    // console.log('rect left', rect.left)
    // console.log('30 procent of the window height', theHeightOfTheWindow * 0.3)

    return (
        rect.top <= (theHeightOfTheWindow * 0.4)
    );
}

window.addEventListener('scroll', ()=>{
    theSections.forEach(section=>{
        // console.log(img)
        
        if(isInViewport(section)){
            console.log('in viewport')

            section.style.transform = 'none'

            const
                thisImages = section.querySelectorAll('img'),
                thisParagraph = section.querySelector('.interesting-fact_section_paragraph')


            thisImages.forEach(img =>{
                img.hasAttribute('class') &&  img.removeAttribute('class')   
            })

            thisParagraph.style.right = '0'
        }
    })
})