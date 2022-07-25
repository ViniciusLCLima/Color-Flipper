import { convertRemToPixels } from "./rem-to-pixels.js";
import { setElementHeight, setElementWidth, setElementRightProperty } from "./set-element-styles.js";
import { changeColor } from "./color-manipulation.js";

const chosenColor = [] //For if user chooses to choose a color

// Functions for validation of inputs and telling user about it.
const validateInput = (input, minValue, maxValue)=>{
    input = parseInt(input)
    const isValid = ((typeof input === 'number') && (input>=minValue) && (input<=maxValue));
    return isValid;
}

const removeSpanFromElement = (element) => {
    const span = element.getElementsByTagName('span');
    if(span[0]){
        span[0].remove();
    }
}

const displayThereYouGoMessage = () =>{
    const greetingsDiv = document.createElement('div');
    const greetingsMsgElement = document.createElement('strong');
    const greetingsMsg = 'There you go!';
    const mainSection = document.querySelector('section');
    greetingsDiv.classList.add('greetings')
    greetingsDiv.appendChild(greetingsMsgElement);
    greetingsMsgElement.textContent = greetingsMsg;
    mainSection.appendChild(greetingsDiv);
    setTimeout(()=>{greetingsDiv.remove()}, 3000);
}

// Functions for expanding and closing of input divs.

const expandInput = (inputDiv) =>{
    inputDiv.classList.remove('closed');
    setElementWidth(inputDiv, widthOfInputs);
}

const closeInputs = () =>{
    hueInputDiv.classList.add('closed');
    saturationInputDiv.classList.add('closed');
    luminanceInputDiv.classList.add('closed');
    setElementWidth(hueInputDiv,0);
    setElementWidth(saturationInputDiv,0);
    setElementWidth(luminanceInputDiv,0);
}

// Styling input border to green(if valid) or red(if invalid) based on the value user puts in it

const styleElementBorderColorBasedOnBoolean = (element, boolean)=>{
    if (boolean){
        element.style.borderColor = 'green'
    }else{
        element.style.borderColor = 'red'
    }
}

// For resetting of validation messages
const removeSpansFromInputDivs = () =>{
    removeSpanFromElement(hueInputDiv);
    removeSpanFromElement(saturationInputDiv);
    removeSpanFromElement(luminanceInputDiv);
}

// Routines for when values are entered
const confirmHue = ()=>{
    let inputValue = parseInt(hueNumberInput.value);
    const isValid = validateInput(inputValue, 0, 360);
    if(isValid){
        hueNumberInput.removeAttribute('style');
        expandInput(saturationInputDiv);
        chosenColor[0] = inputValue;
        hueNumberInput.value = '';
        saturationNumberInput.focus();
    } else{
        displayInvalidInputMessage(hueInputAndOkDiv,hueNumberInput, 0, 360);
    }
}

const confirmSaturation = ()=>{
    let inputValue = parseInt(saturationNumberInput.value);
    const isValid = validateInput(inputValue, 0, 100);
    if (isValid){
        saturationNumberInput.removeAttribute('style');
        expandInput(luminanceInputDiv);
        chosenColor[1] = inputValue;
        saturationNumberInput.value = '';
        luminanceNumberInput.focus();
    } else{
        displayInvalidInputMessage(saturationInputAndOkDiv,saturationNumberInput, 0, 100);
    }
}

const confirmLuminance = () => {
    let inputValue = parseInt(luminanceNumberInput.value);
    const isValid = validateInput(inputValue, 0, 100);
    if (isValid){
        luminanceNumberInput.removeAttribute('style');
        chosenColor[2] = inputValue;
        luminanceNumberInput.value = '';
        closeInputs();
        changeColor(chosenColor);
        setInputDivsHeight(choiceDiv.offsetHeight);
        removeSpansFromInputDivs();
        displayThereYouGoMessage();
        luminanceNumberInput.blur();
    }else{
        displayInvalidInputMessage(luminanceInputAndOkDiv,luminanceNumberInput, 0, 100);
    }
}

//Getting elements
const inputDivs = document.querySelectorAll('.number-input-div');
const hueInputDiv = document.querySelector('.hue-input-div');
const hueInputAndOkDiv = document.querySelector('.hue-input-div .input-and-ok-div');
const hueNumberInput = document.getElementById('hueInput');
const hueConfirmBtn = document.querySelector('.hue-confirm');
const saturationInputDiv = document.querySelector('.saturation-input-div');
const saturationInputAndOkDiv = document.querySelector('.saturation-input-div .input-and-ok-div');
const saturationNumberInput = document.getElementById('saturationInput');
const saturationConfirmBtn = document.querySelector('.saturation-confirm');
const luminanceInputDiv = document.querySelector('.luminance-input-div');
const luminanceInputAndOkDiv = document.querySelector('.luminance-input-div .input-and-ok-div');
const luminanceNumberInput = document.getElementById('luminanceInput');
const luminanceConfirmBtn = document.querySelector('.luminance-confirm');
const choiceBtn = document.querySelector('.choice-btn');
const choiceDiv = document.querySelector('.choice-btn-div');
const btnsDiv = document.querySelector('.btns-div');

const getWantedWidthForInputDivs=()=>{
    const choiceDivWidth = choiceDiv.offsetWidth;
    const choiceDivMargin = parseFloat(getComputedStyle(choiceDiv).marginRight);
    return (choiceDivWidth*2)+(choiceDivMargin*2)
}

var widthOfInputs = getWantedWidthForInputDivs();

//Settle height of inputs
const setInputDivsHeight= ()=>{
    const choiceDivHeight = choiceDiv.offsetHeight;
    setElementHeight(hueInputDiv, choiceDivHeight);
    setElementHeight(saturationInputDiv,choiceDivHeight);
    setElementHeight(luminanceInputDiv,choiceDivHeight);
}
const setInputsDistanceFromRightEdge= ()=>{
    const choiceBtnDistanceFromRightEdge = window.innerWidth - choiceDiv.getBoundingClientRect().right;
    setElementRightProperty(hueInputDiv, choiceBtnDistanceFromRightEdge);
    setElementRightProperty(saturationInputDiv, choiceBtnDistanceFromRightEdge);
    setElementRightProperty(luminanceInputDiv, choiceBtnDistanceFromRightEdge);
}

// Adjusting position and size of number input divs
const updatePositionHeightAndWidthOfInputDivs=()=>{
    // Getting choosing button distance from right and width of buttons
    

    //positioning Input Divs
    setInputDivsHeight();
    setInputsDistanceFromRightEdge();
    const inputDivs = document.querySelectorAll('.number-input-div');
    const widthOfInputs = getWantedWidthForInputDivs();
    for (let i = 0; i<inputDivs.length; i++){
        const IS_INPUT_DIV_CLOSED = inputDivs[i].classList.contains('closed');
        IS_INPUT_DIV_CLOSED ? {} : setElementWidth(inputDivs[i], widthOfInputs);
    }
}

updatePositionHeightAndWidthOfInputDivs();
window.addEventListener('resize',updatePositionHeightAndWidthOfInputDivs);


// setting routines for confirmation of inputs on click over ok button
hueConfirmBtn.addEventListener('click', confirmHue);
saturationConfirmBtn.addEventListener('click', confirmSaturation);
luminanceConfirmBtn.addEventListener('click', confirmLuminance);

// Expand hue input div when button to choose is clicked
choiceBtn.addEventListener('click', ()=>{
    expandInput(hueInputDiv);
    hueNumberInput.focus();
})

// Invalid input routine
const displayInvalidInputMessage = (inputAndOkDiv, input, minValue, maxValue) =>{
    input.style.borderColor = 'red';
    const newInputDivHeight = choiceDiv.offsetHeight + convertRemToPixels(1);
    setInputDivsHeight(newInputDivHeight);
    const HAS_MSG_ALREADY = inputAndOkDiv.textContent.includes('Please, enter');
    if (HAS_MSG_ALREADY){}else{
    const spanElement = document.createElement('span');
    spanElement.innerHTML = `Please, enter a number from ${minValue} to ${maxValue}.`;
    inputAndOkDiv.appendChild(spanElement);   
    }
}

// Setting enter key to confirm values when pressed
hueNumberInput.addEventListener('keypress', (e)=>{
    if(e.key === 'Enter'){
        confirmHue();
    }
})
saturationNumberInput.addEventListener('keypress', (e)=>{
    if(e.key === 'Enter'){
        confirmSaturation();
    }
})
luminanceNumberInput.addEventListener('keypress', (e)=>{
    if(e.key === 'Enter'){
        confirmLuminance();
    }
})

// Styling input border to green(if valid) or red(if invalid) based on the value user puts in it

hueNumberInput.addEventListener('input', ()=>{
    const IS_INPUT_VALID = validateInput(hueNumberInput.value, 0, 360);
    styleElementBorderColorBasedOnBoolean(hueNumberInput, IS_INPUT_VALID);
})

saturationNumberInput.addEventListener('input', ()=>{
    const IS_INPUT_VALID = validateInput(saturationNumberInput.value, 0, 100);
    styleElementBorderColorBasedOnBoolean(saturationNumberInput, IS_INPUT_VALID);
})

luminanceNumberInput.addEventListener('input', ()=>{
    const IS_INPUT_VALID = validateInput(luminanceNumberInput.value, 0, 100);
    styleElementBorderColorBasedOnBoolean(luminanceNumberInput, IS_INPUT_VALID);
})