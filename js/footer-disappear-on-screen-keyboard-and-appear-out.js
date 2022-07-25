const addIfItHasAndDelIfNotClassOnElement = (element, theClass)=>{
    const hasClass = element.classList.contains(theClass)
    hasClass ? element.classList.remove(theClass) : element.classList.add(theClass);
}
const myFooterPresentation = document.querySelector('.footer-presentation');
const presentationSticker = document.querySelector('.presentation-sticker');

window.addEventListener('resize', ()=>{
    const classToAddorDelOnKeyboardAppearance='on-keyboard-appearance'
    addIfItHasAndDelIfNotClassOnElement(myFooterPresentation, classToAddorDelOnKeyboardAppearance);
    addIfItHasAndDelIfNotClassOnElement(presentationSticker, classToAddorDelOnKeyboardAppearance);
});