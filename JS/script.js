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
let showButton =()=>{
    // Remove the class of hidden from Modal && Overlay
    modal.classList.remove(`hidden`)
    overlay.classList.remove(`hidden`)
}
    for(let i = 0; i<showButtonModal.length; i++)
    showButtonModal[i].addEventListener(`click`,showButton)

// Adds the class of hidden in the modal&overlay
let closeButton= ()=>{
    modal.classList.add(`hidden`)
    overlay.classList.add(`hidden`)

}
closeButtonModal.addEventListener(`click`,closeButton)

