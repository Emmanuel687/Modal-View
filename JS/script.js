// Selected the modal element class
let modal = document.querySelector(`.modal`)

// Selected the overlay element class
let overlay = document.querySelector(`.overlay`)

// Selected the close-modal element class
let closeButtonModal = document.querySelector(`.close-modal`)

// Selected the show-modal element class

let showButtonModal = document.querySelectorAll(`.show-modal`)
console.log(showButtonModal)

for(let i = 0; i<showButtonModal.length; i++)
    showButtonModal[i].addEventListener(`click`,function(){
        console.log(`button clicked`)
    })
