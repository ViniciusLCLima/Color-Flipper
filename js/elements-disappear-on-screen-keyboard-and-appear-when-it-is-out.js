const mainMsg = document.querySelector('.main-div h2');
const myFooterPresentation = document.querySelector('.footer-presentation');
const presentationSticker = document.querySelector('.presentation-sticker');
const inputs = document.querySelectorAll('.main-btn-div input');
const classToAddOrDelOnKeyboardAppearance = 'on-keyboard-appearance'

const addListenerToAllElementsOfArray=(array, event, listener)=>{
    for (let i=0; i<(array.length); i++){
    array[i].addEventListener(event,listener)
    }
}

addListenerToAllElementsOfArray(inputs, 'focus',()=>{
    mainMsg.classList.add(classToAddOrDelOnKeyboardAppearance);
    myFooterPresentation.classList.add(classToAddOrDelOnKeyboardAppearance);
    presentationSticker.classList.add(classToAddOrDelOnKeyboardAppearance);
    })

addListenerToAllElementsOfArray(inputs, 'focusout',()=>{
        mainMsg.classList.remove(classToAddOrDelOnKeyboardAppearance);
        myFooterPresentation.classList.remove(classToAddOrDelOnKeyboardAppearance);
        presentationSticker.classList.remove(classToAddOrDelOnKeyboardAppearance);
    })