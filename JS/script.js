// Selected the modal element class
let modal = document.querySelector(`.modal`)

// Selected the overlay element class
let overlay = document.querySelector(`.overlay`)

// Selected the close-modal element class
let closeButtonModal = document.querySelector(`.close-modal`)

// Selected the show-modal element class
// Used Query Selector all because it selects all elements with the class name
let showButtonModal = document.querySelectorAll(`.show-modal`)
console.log(showButtonModal)


// Loop through the showButton
for(let i = 0; i<showButtonModal.length; i++)
    showButtonModal[i].addEventListener(`click`,function(){
        console.log(`button clicked`)
        // Remove the class of hidden from Modal
        modal.classList.remove(`hidden`)
        overlay.classList.remove(`hidden`)
    })


closeButtonModal.addEventListener(`click`,()=>{
    modal.classList.add(`.hidden`)
})