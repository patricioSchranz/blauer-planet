const 
    generallyViewBreakPoint = window.innerHeight * 0.5,
    viewBreakPointBottom = window.innerHeight * 0.8

export const isTheElementTopOnTopOfTheViewport = (element)=>{
    const thisBoundingRect = element.getBoundingClientRect()

    return (
        thisBoundingRect.top <= generallyViewBreakPoint
    )
}

export const isTheElementTopOnBottomOfTheViewport = (element)=>{
    const thisBoundingRect = element.getBoundingClientRect()

    return (
        thisBoundingRect.top <= viewBreakPointBottom
    )
}