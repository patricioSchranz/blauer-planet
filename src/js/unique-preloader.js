const 
    uniquePreloader = document.querySelector('.unique_preloader'),
    theBody = document.querySelector('body')

console.log(uniquePreloader)
console.log(theBody)

theBody.onload = ()=> uniquePreloader.style.display = 'none'