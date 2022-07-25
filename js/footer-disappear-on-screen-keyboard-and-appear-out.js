const addIfItHasAndDelIfNotClassOnElement = (element, theClass)=>{
    const hasClass = element.classList.contains('on-keyboard-appearance')
    hasClass ? element.classList.add('on-keyboard-appearance') : element.classList.remove('on-keyboard-appearance');
}
const myFooterPresentation = document.querySelector('footer-presentation');
const presentationSticker = document.querySelector('presentation-sticker');

window.addEventListener('resize', ()=>{
    const classToAddorDelOnKeyboardAppearance='on-keyboard-appearance'
    addIfItHasAndDelIfNotClassOnElement(classToAddorDelOnKeyboardAppearance);
    addIfItHasAndDelIfNotClassOnElement(classToAddorDelOnKeyboardAppearance);
});