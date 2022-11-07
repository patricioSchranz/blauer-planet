const
    sliderContainer = document.querySelector('.generally_slider-container'),
    blockquoteSpans = document.querySelectorAll('.generally_blockquote span'),
    paragraphs = document.querySelectorAll('p'),
    blockquoteElements = document.querySelectorAll('.generally_blockquote')

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

window.addEventListener('scroll', ()=>{
    if(isTheElementTopOnBottomOfTheViewport(sliderContainer)){
        sliderContainer.style.opacity = '1'
    }

    // blockquoteSpans.forEach(span =>{
    //     if(isTheElementTopOnBottomOfTheViewport(span)){
    //         if(span.hasAttribute('class')){
    //             span.removeAttribute('class')
    //         }
    //     }  
    // })

    blockquoteElements.forEach(blockquote =>{
        if(isTheElementTopOnBottomOfTheViewport(blockquote)){
            const thisSpans = blockquote.querySelectorAll('span')
            let count = 0

            thisSpans.forEach(span =>{
                if(span.hasAttribute('class')){
                    setTimeout(()=>{
                        span.removeAttribute('class')
                    }, `${count}`)
                    
                }

                count += 200
            })
        }
    })

    paragraphs.forEach(paragraph =>{
        if(isTheElementTopOnBottomOfTheViewport(paragraph)){
            if(paragraph.hasAttribute('class')){
                paragraph.removeAttribute('class')
            }
        }
    })
   
})