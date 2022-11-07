//--- hamburger button and functions ---
const
    hamburgerButton = document.querySelector('.unique_hamburger-button'),
    hamburgerLines = document.querySelectorAll('.unique_hamburger-line'),
    nav = document.querySelector('.unique_nav')

let hamburgerState = 0

hamburgerButton.addEventListener('click', ()=>{

    if(hamburgerState === 0){
        hamburgerButton.style.justifyContent = 'center'
        hamburgerLines[1].style.display = 'none'
        hamburgerLines[2].style.width = '100%'
        hamburgerLines[2].style.transform = 'rotate(-45deg)'
        hamburgerLines[0].style.transform = 'rotate(45deg)'
        nav.style.display = 'flex'
        hamburgerState = 1
    }
    else{
        hamburgerButton.style.justifyContent = 'space-evenly'
        hamburgerLines[1].style.display = 'block'
        hamburgerLines[2].style.width = '60%'
        hamburgerLines[2].style.transform = 'rotate(0deg)'
        hamburgerLines[0].style.transform = 'rotate(0deg)'
        nav.style.display = 'none'
        hamburgerState = 0
    }

})


//--- submenu of the navigation ---
const 
    openSubMenuButtons = document.querySelectorAll('.unique_open-sub-menu-button')

let subMenuState = 0

const closeAllOpenSubMenus = ()=>{
    openSubMenuButtons.forEach(buttonToClose =>{
        buttonToClose.nextElementSibling.style.display = 'none'
        buttonToClose.innerHTML = '+'
    })
}

openSubMenuButtons.forEach(button =>{
    button.addEventListener('click', ()=>{

        if(button.innerHTML === '+'){
            closeAllOpenSubMenus()
            button.innerHTML = '-'
            button.nextElementSibling.style.display = 'flex'
        }
        else{
            closeAllOpenSubMenus()
            button.innerHTML = '+'
        }
        
    })
})
