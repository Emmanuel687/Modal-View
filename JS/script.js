let modal = document.querySelector(`.modal`)
let overlay = document.querySelector(`.overlay`)
let closeButtonModal = document.querySelector(`.close-modal`)
let showButtonModal = document.querySelectorAll(`.show-modal`)
console.log(showButtonModal)

for(let i = 0; i<showButtonModal.length; i++)
    showButtonModal[i].addEventListener(`click`,function(){
        console.log(`button clicked`)
    })
