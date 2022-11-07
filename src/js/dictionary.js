//--- initial DOM Elements ---

const
    wholeDropDown = document.querySelector('.dictionary_alphabet-selection'),
    dropDownSelectedDisplay = document.querySelector('.dictionary_alphabet-selection_selected'),
    dropDownTheList = document.querySelector('.dictionary_alphabet-selection_alphabet'),
    bringTheSearchButton = document.querySelector('.dictionary_alphabet-selection_alphabet_search'),
    datalistAnimal = document.querySelector('#animals-list'),
    datalistPlants = document.querySelector('#plants-list'),
    searchFormluar = document.querySelector('.dictionary_search'),
    inputField = document.querySelector('.dictionary_search input'),
    sectionContainer = document.querySelector('.section-container'),
    sections = document.querySelectorAll('section'),
    cards = document.querySelectorAll('.dictionary_card')
   



//--- Elements to work ---

const
    alphabet = [],
    all = 'Alle'



//--- set the drop down list

sections.forEach(section =>{
    let
        thisLetter = section.dataset.sectionAlphabet

    // console.log(thisLetter)

    alphabet.includes(thisLetter) || alphabet.push(thisLetter)
    // alphabet.push('A')
    alphabet.sort()
    // console.log(alphabet)
})

dropDownTheList.innerHTML += '<li class="drop-down">Alle</li>'

alphabet.forEach(letter =>{
    dropDownTheList.innerHTML += `
    <li class="drop-down">${letter}</li>
    `
})



//--- set the data list ---

cards.forEach(card =>{
    thisItem = card.querySelector('h3').innerHTML

    if(datalistAnimal){
        datalistAnimal.innerHTML += `
        <option value="${thisItem}">
    `
    }
    else if(datalistPlants){
        datalistPlants.innerHTML += `
        <option value="${thisItem}">
    `
    }
})


// --- drop down listener ---

const 
    dropDownItems = wholeDropDown.querySelectorAll('.drop-down'),
    searchedAnimals = []

let searchState = 0

dropDownItems.forEach(dropDownItem =>{
    // console.log(dropDownItem.innerHTML)

    dropDownItem.addEventListener('click', (event)=>{
        // console.log(event.target.tagName)
        let thisValue = dropDownItem.innerHTML

        const showSection = document.createElement('section')
        showSection.classList.add('dictionary_section')

        sectionContainer.innerHTML = ''
        sectionContainer.appendChild(showSection)

        event.target.tagName === 'LI' && (dropDownSelectedDisplay.innerHTML = thisValue)
        // console.log('the value is =>', thisValue)

        searchFormluar.style.display = 'none'

       if(thisValue === 'Alle'){
            searchedAnimals.length = 0
            // console.log(searchedAnimals)

            cards.forEach(card => {
                thisH3 = card.querySelector('h3').innerHTML

                searchedAnimals.sort()
                searchedAnimals.push(thisH3)
            })
            
            searchedAnimals.forEach(animal =>{
                cards.forEach(card =>{
                    thisH3 = card.querySelector('h3').innerHTML

                    if (thisH3 === animal ){
                        searchState && (card.style.opacity = '1')
                        copyOfThisCard = card.cloneNode(true)
                        showSection.appendChild(copyOfThisCard)
                        copyOfThisCard.style.display = 'flex'
                    }
                })
            })

       }
       else if(event.target.tagName !== 'LI'){
            dropDownSelectedDisplay.innerHTML = 'Einzelsuche'
            searchFormluar.style.display = 'flex'
       }
       else{
        sections.forEach(section =>{
            if(section.dataset.sectionAlphabet === thisValue){
                const
                    searchedSection = section,
                    cardsOfTheSearchedSection = searchedSection.querySelectorAll('.dictionary_card')

                searchedAnimals.length = 0
                cardsOfTheSearchedSection.forEach(card => searchedAnimals.push(card.querySelector('h3').innerHTML))

                searchState = 1

                // console.log('the searched section =>', searchedSection)
                // console.log('the cards of the searched section =>', cardsOfTheSearchedSection)
                // console.log('the animals of the searched section are =>', searchedAnimals)

                searchedAnimals.forEach(animal =>{
                    cardsOfTheSearchedSection.forEach(card =>{
                        thisCardHeading = card.querySelector('h3').innerHTML

                        if(thisCardHeading === animal){
                            card.style.opacity = '1'
                            copyOfThisCard = card.cloneNode(true)
                            showSection.appendChild(copyOfThisCard)
                            copyOfThisCard.style.display = 'flex'
                        }
                    })
                })
            }
        })
       }
    })
})



//--- dom content loaded ---

document.addEventListener('DOMContentLoaded', ()=>{
   dropDownItems.forEach(item => item.innerHTML === 'Alle' && item.click())

})



//--- event handlers ---

let theCurrentOpenContentButton

const openContent = (element)=>{
   console.log(element)

   theCurrentOpenContentButton = element

   const
    thisParent = element.parentElement,
    thisContent = thisParent.nextElementSibling

//    console.log(thisParent)
//    console.log(thisContent)

   theCurrentOpenContentButton.classList.toggle('activatedOpenButton')
    
    thisContent.style.display = 'flex'
}

const closeContent = (element)=>{
    const 
        thisParent = element.parentElement
        
        // => mit previousSibling wird ein leerer pseudo text ausgewählt
        // thisBeforeSibling = thisParent.previousSibling
        // theOpenContentButton = thisBeforeSibling.querySelector('button')
        // console.log(thisBeforeSibling)

    thisParent.style.display = 'none'
    theCurrentOpenContentButton.classList.toggle('activatedOpenButton')
}



// --- form handling ---

inputField.addEventListener('click', ()=>{
    inputField.value = ''
})

const escapeTheInput = (userInput)=>{
    return userInput
            .replaceAll('&', '&amp;') 
            .replaceAll('<', '&lt;') 
            .replaceAll('>', '&gt;')
            .replaceAll('"', '&quot;')
            .replaceAll("'", '&#39;')
            .replaceAll('/', '&sol;') //&#47;
            .replaceAll('\\', '&bsol;') //&#92;

}


searchFormluar.addEventListener('submit', (event)=>{
    event.preventDefault()

    const 
        theInputValue = searchFormluar['search-value'].value,
        showSection = document.createElement('section')

    // console.log(theInputValue)
    showSection.classList.add('dictionary_section')
    

    sectionContainer.innerHTML = ''
    sectionContainer.appendChild(showSection)

    let foundState = 0

    
    cards.forEach(card =>{
        const
            thisCardAnimal = card.querySelector('h3').innerHTML

        console.log(thisCardAnimal)
        console.log(theInputValue)

        if(thisCardAnimal === theInputValue){
            console.log(card)
            foundState = 1
            card.style.opacity = '1'
            copyOfThisCard = card.cloneNode(true)
            copyOfThisCard.style.display = 'flex'
            showSection.appendChild(copyOfThisCard)
        }
    })

   if(!foundState){
        const escapedUserInput = escapeTheInput(theInputValue)
        // console.log(escapedUserInput)

        showSection.innerHTML = 
        `
        <span class="form-hint">
            Es wurde kein Eintrag zu <strong>${escapedUserInput}</strong> gefunden.
        </span>
        `
   }
})

