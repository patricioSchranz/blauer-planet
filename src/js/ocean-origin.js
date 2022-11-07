import * as inViewportCheck from "./in-viewport.js"

const
    sectionOnThePoint = document.querySelector('.ocean_on-the-point'),
    sectionClassA = document.querySelector('.ocean_section-classA'),
    sectionClassB = document.querySelector('.ocean_section-classB'),
    sectionClassC = document.querySelectorAll('.ocean_section-classC'),
    fullWidthImage = document.querySelector('.ocean_full-width-image'),
    sectionOnThePointPT2 = document.querySelector('.ocean_section-on-the-point-2')

window.addEventListener('scroll', ()=>{
    if(inViewportCheck.isTheElementTopOnTopOfTheViewport(sectionOnThePoint)){
        const
            thisParagraph = sectionOnThePoint.querySelector('p'),
            thisImage = sectionOnThePoint.querySelector('img')


        if(window.innerHeight > 1200){
            thisParagraph.style.opacity = '1'
            thisParagraph.classList.add('on-point-paragraph-in-viewport')
            thisImage.style.opacity = '1'
            thisImage.style.animationName = 'rotate-around'
        }
        else if(window.innerHeight <= 1200){
            if(inViewportCheck.isTheElementTopOnTopOfTheViewport(thisParagraph)){
                thisParagraph.style.opacity = '1'
                thisParagraph.classList.add('on-point-paragraph-in-viewport')
            }

            if(inViewportCheck.isTheElementTopOnTopOfTheViewport(thisImage)){
                thisImage.style.opacity = '1'
                thisImage.style.animationName = 'rotate-around'
            }
        }
    
    }

    if(inViewportCheck.isTheElementTopOnTopOfTheViewport(sectionClassA)){
        const
            paragraphContainerOfClassA = sectionClassA.querySelector('.ocean_section-classA_paragraph-container'),
            imageOfClassA = sectionClassA.querySelector('img')

        sectionClassA.style.opacity = '1'
        paragraphContainerOfClassA.style.transform = 'none'
        imageOfClassA.style.transform = 'none'
    }

    if(inViewportCheck.isTheElementTopOnTopOfTheViewport(sectionClassB)){
        const
            paragraphContainerOfClassB = sectionClassB.querySelector('.ocean_section-classB_paragraph-container'),
            imageOfClassB = sectionClassB.querySelector('img')

        sectionClassB.style.opacity = '1'
        paragraphContainerOfClassB.style.transform = 'none'
        imageOfClassB.style.transform = 'none'
    }

    sectionClassC.forEach(section =>{
        if(inViewportCheck.isTheElementTopOnTopOfTheViewport(section)){
            section.style.transform = 'none'
            section.style.opacity = '1'
        }
    })
   

    if(inViewportCheck.isTheElementTopOnTopOfTheViewport(fullWidthImage)){
        fullWidthImage.style.opacity = '1'
        fullWidthImage.style.transform = 'none'
    }

    if(inViewportCheck.isTheElementTopOnBottomOfTheViewport(sectionOnThePointPT2)){
        const 
            theParagraphOfThisSection = sectionOnThePointPT2.querySelector('p')

        console.log('on the point 2 arrived the breakpoint')

        sectionOnThePointPT2.style.borderLeft = '2px solid black'
        sectionOnThePointPT2.style.opacity = '1'

        window.innerWidth >= 1000 &&  (sectionOnThePointPT2.style.width = '60%')
        window.innerWidth <= 1000 &&  (sectionOnThePointPT2.style.width = '75%')
        window.innerWidth <= 800 &&  (sectionOnThePointPT2.style.width = '85%')
        window.innerWidth <= 550 &&  (sectionOnThePointPT2.style.width = '95%')
       

        setTimeout(()=>{
            theParagraphOfThisSection.style.whiteSpace = 'normal'
            theParagraphOfThisSection.style.opacity = '1'
        }, 250)
        
    }
})
