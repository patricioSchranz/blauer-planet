let
  cursor = document.querySelector('.cursor'),
  cursorinner = document.querySelector('.cursor2'),
  a = document.querySelectorAll('a'),
  buttons = document.querySelectorAll('button'),
  inputs = document.querySelectorAll('input'),
  dropDownLists = document.querySelectorAll('.drop-down'),
  aSectionContainer = document.querySelector('.section-container'),
  animalCards = document.querySelectorAll('.dictionary_card'),
  lastAnimalCard = document.querySelector('.dictionary_card:last-of-type'),
  cardButtons


//--- in viewport functions ---
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

//--- Mutation Observer ---

if(aSectionContainer){
  const refreshDOMElements = (mutations)=>{
    // console.log(mutations)
    // console.log('a change => !!!')
    // console.log(buttons)

    cardButtons = aSectionContainer.querySelectorAll('button')
    // console.log(cardButtons.length)

    animalCards = document.querySelectorAll('.dictionary_card'),
    lastAnimalCard = document.querySelector('.dictionary_card:last-of-type')
  
    if(cardButtons){
      cardButtons.forEach(item => {
        item.addEventListener('mouseover', () => {
          cursor.classList.add('hover')
          cursor.style.width = `${item.offsetWidth + 32}px`
          cursor.style.height = `${item.offsetHeight + 32}px`
          cursor.style.borderRadius = '0'
        })
      
        item.addEventListener('mouseleave', () => {
          cursor.classList.remove('hover');
          cursor.style.width = '4rem'
          cursor.style.height = '4rem'
          cursor.style.borderRadius = '50%'
        })
      })
    }

  }
  
  let observer = new MutationObserver(refreshDOMElements)
  
  observer.observe(aSectionContainer, {childList: true, subtree: true})
}

document.addEventListener('scroll', ()=>{
    animalCards.forEach(card =>{

        if(card === lastAnimalCard){
          isTheElementTopOnBottomOfTheViewport(card) && (card.style.opacity = '1')
        }
        isTheElementTopOnTopOfTheViewport(card) && (card.style.opacity = '1')
    })
})


//--- Mouse Functions ---

document.addEventListener('mousemove', function(e){
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  let x = e.clientX;
  let y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});


a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
    cursor.style.width = `${item.offsetWidth + 32}px`
    cursor.style.height = `${item.offsetHeight + 32}px`
    cursor.style.borderRadius = '0'
  })
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
    cursor.style.width = '4rem'
    cursor.style.height = '4rem'
    cursor.style.borderRadius = '50%'
  })
})

if(buttons){
  buttons.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover')
      cursor.style.width = `${item.offsetWidth + 32}px`
      cursor.style.height = `${item.offsetHeight + 32}px`
      cursor.style.borderRadius = '0'
    })
  
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
      cursor.style.width = '4rem'
      cursor.style.height = '4rem'
      cursor.style.borderRadius = '50%'
    })
  })
}

if(inputs){
  inputs.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover')
      cursor.style.width = `${item.offsetWidth + 32}px`
      cursor.style.height = `${item.offsetHeight + 32}px`
      cursor.style.borderRadius = '0'
    })
  
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
      cursor.style.width = '4rem'
      cursor.style.height = '4rem'
      cursor.style.borderRadius = '50%'
    })
  })
}

if(dropDownLists){
  dropDownLists.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover')
      cursor.style.width = `${item.offsetWidth + 32}px`
      cursor.style.height = `${item.offsetHeight + 32}px`
      cursor.style.borderRadius = '0'
    })
  
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
      cursor.style.width = '4rem'
      cursor.style.height = '4rem'
      cursor.style.borderRadius = '50%'
    })
  })
}






