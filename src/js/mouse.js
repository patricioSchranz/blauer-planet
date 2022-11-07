//--- unique dom elements ---

const
  cursor = document.querySelector('.cursor'),
  cursorinner = document.querySelector('.cursor2'),
  a = document.querySelectorAll('a'),
  buttons = document.querySelectorAll('button')


//--- Unique Mouse Functions ---

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



// ### GALLERY ###

//--- dom elements of the gallery ---

const
  galleryImages = document.querySelectorAll('.gallery_gallery_img'),
  theImageGallery = document.querySelector('.gallery_gallery'),
  modalButtons = document.querySelectorAll('.gallery_modal button')



//--- mouse functions of the gallery

if(theImageGallery){

  theImageGallery.addEventListener('mouseover', () => {
    cursor.style.opacity = '0'
  })

  theImageGallery.addEventListener('mouseleave', () => {
    cursor.style.opacity = '.7'
  })
  
}

if(modalButtons){
  modalButtons.forEach(button =>{
   button.addEventListener('mouseover', () => {
      cursor.style.opacity = '0'
    })
  
   button.addEventListener('mouseleave', () => {
      cursor.style.opacity = '.7'
    })
  })
}











