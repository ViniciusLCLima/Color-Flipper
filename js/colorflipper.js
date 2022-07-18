const chosenColor = []
const changeColor = (bgColor)=>{
    //set bg Color on if it has been chosen or get a random one for it
    if (bgColor){
    } else{
        bgColor = getRandomHslColorAsArray();
    }

    //set other colors and tints
    const contrastingColor = getContrastingHslAsArrayFromHslAsArray(bgColor);
    const accentColor = getAccentHslAsArrayFromHslAsArray(bgColor);
    const shadowLightness = getContrastingLightnessFromHslAsArray(bgColor);
    const onHoverContrastColorLightness = getLightnessValueForHoverFromHslAsArray(contrastingColor);

    // set css variables to the found colors
    rootElement = document.querySelector(":root");
    rootElement.style.setProperty('--bgColorHue', `${bgColor[0]}`);
    rootElement.style.setProperty('--bgColorSaturation',`${bgColor[1]}%`);
    rootElement.style.setProperty('--bgColorLightness',`${bgColor[2]}%`);
    rootElement.style.setProperty('--contrastingColorHue',`${contrastingColor[0]}`);
    rootElement.style.setProperty('--contrastingColorSaturation',`${contrastingColor[1]}%`);
    rootElement.style.setProperty('--contrastingColorLightness',`${contrastingColor[2]}%`);
    rootElement.style.setProperty('--accentColorHue',`${accentColor[0]}`);
    rootElement.style.setProperty('--accentColorSaturation',`${accentColor[1]}%`);
    rootElement.style.setProperty('--accentColorLightness',`${accentColor[2]}%`);
    rootElement.style.setProperty('--shadowLightness',`${shadowLightness}%`);
    rootElement.style.setProperty('--onHoverContrastColorLightness',`${onHoverContrastColorLightness}%`);
}

// Functions to get colors

const getContrastingLightnessFromHslAsArray= (hslArray) =>{
    let lightness = hslArray[2];
    lightness = getOneOfTwoValuesBasedIfAnotherIsGreaterThanFifty(lightness, 0, 100)
    return lightness;
}

const getLightnessValueForHoverFromHslAsArray = (hslArray) =>{
    let lightness = hslArray[2];
    lightness = getOneOfTwoValuesBasedIfAnotherIsGreaterThanFifty(lightness, lightness-15, lightness+15);
    return lightness;
}

const getOneOfTwoValuesBasedIfAnotherIsGreaterThanFifty = (valueToEvaluate, ifIs, ifNot) => {
    if (valueToEvaluate>50){
        return ifIs
    }
    return ifNot
}

const getContrastingHslAsArrayFromHslAsArray = (hslArray)=>{
    let hue = hslArray[0];
    let saturation = hslArray[1];
    let lightness = hslArray[2];
    if (hue<=180){
        hue += 180;
    } else{
        hue -= 180
    }
    saturation = 85;
    if (lightness<=50) {
        if(lightness<=30){
            lightness +=  70} 
        else if(lightness<=40){
            lightness +=  60
        } else {
        lightness = 98
        }
    } else {
        if(lightness>=70){
            lightness -=  70
        } else if(lightness>=60){
            lightness -=  60
        } else {
            lightness = 2
        }
    }
    contrastingColor = [hue, saturation, lightness];
    return contrastingColor;
}

const getAccentHslAsArrayFromHslAsArray = (hslArray)=>{
    let hue = hslArray[0];
    let saturation = hslArray[1];
    let lightness = hslArray[2];
    if (hue<=180){
        hue += 90;
    } else{
        hue -= 90
    }
    saturation = 65;
    if (lightness<=50) {
        if(lightness<=30){
            lightness+= 35} 
        else if(lightness<=40){
            lightness+= 30
        } else {
        lightness = 75
        }
    } else {
        if(lightness>=70){
            lightness -=  35
        } else if(lightness>=60){
            lightness -=  30
        } else {
            lightness = 25
        }
    }
    accentColor = [hue, saturation, lightness];
    return accentColor;
}

const getRandomIntegerFromZeroToAnother = (finalNumber)=>{
    const RANDOM_NUMBER = Math.floor(Math.random()*(finalNumber+1));
    return RANDOM_NUMBER;
}

const getRandomHslColorAsArray = ()=>{
    const HUE = getRandomIntegerFromZeroToAnother(360);
    const SATURATION = getRandomIntegerFromZeroToAnother(100);
    const LIGHTNESS = getRandomIntegerFromZeroToAnother(100);
    const hslColor = [HUE, SATURATION, LIGHTNESS];
    return hslColor;
}

const setElementEventListener = (elementQS, event, theFunction)=>{ // QS means query selector
    const element = document.querySelector(elementQS)
    element.addEventListener(event, theFunction)
}

const randomColorBtnQS = '.random-btn';

setElementEventListener(randomColorBtnQS, 'click', () => changeColor());

// Get random set of colors for page when script is executed
changeColor();

// Functions to settle size of input divs when user use choice button.
const setElementWidth = (element, value)=>{
    element.style.width = `${value}px`;
}

const setElementRightProperty = (element, value) => {
    element.style.right = `${value}px`;
}

const setElementHeight = (element, value) => {
    element.style.height = `${value}px`;
}

function convertRemToPixels(rem) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
const setInputDivsHeight= (height)=>{
    setElementHeight(hueInputDiv, height);
    setElementHeight(saturationInputDiv,height);
    setElementHeight(luminanceInputDiv,height);
}

// Functions for validation of inputs and telling user about it.
const validateInput = (input, minValue, maxValue)=>{
    input = parseInt(input)
    const isValid = ((typeof input === 'number') && (input>=minValue) && (input<=maxValue));
    return isValid;
}

const displayInvalidInputMessage = (inputDiv, inputAndOkDiv, input, minValue, maxValue) =>{
    input.style.borderColor = 'red';
    newInputDivHeight = choiceDivHeight + convertRemToPixels(1);
    setInputDivsHeight(newInputDivHeight);
    const HAS_MSG_ALREADY = inputAndOkDiv.textContent.includes('Please, enter');
    if (HAS_MSG_ALREADY){}else{
    const spanElement = document.createElement('span');
    spanElement.innerHTML = `Please, enter a number from ${minValue} to ${maxValue}.`;
    inputAndOkDiv.appendChild(spanElement);   
    }
}

const removeSpanFromElement = (element) => {
    span = element.getElementsByTagName('span');
    if(span[0]){
        span[0].remove();
    }
}

const removeSpansFromInputDivs = () =>{
    removeSpanFromElement(hueInputDiv);
    removeSpanFromElement(saturationInputDiv);
    removeSpanFromElement(luminanceInputDiv);
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

//Getting elements
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

// Getting choosing button distance from right and width of buttons to settle size of input divs when they open
const choiceBtnDistanceFromRightEdge = window.innerWidth - choiceDiv.getBoundingClientRect().right;
const choiceDivMargin = parseFloat(getComputedStyle(choiceDiv).marginRight);
const choiceDivWidth = choiceDiv.offsetWidth;
const choiceDivHeight = choiceDiv.offsetHeight;
const widthOfInputs = (choiceDivWidth*2)+(choiceDivMargin*2);

//positioning Input Divs
setElementRightProperty(hueInputDiv, choiceBtnDistanceFromRightEdge);
setElementRightProperty(saturationInputDiv, choiceBtnDistanceFromRightEdge);
setElementRightProperty(luminanceInputDiv, choiceBtnDistanceFromRightEdge);

//setting height of inputs
setInputDivsHeight(choiceDivHeight);

// Functions for expanding and closing of input divs.
const expandInput = (inputDiv) =>{
    inputDiv.classList.remove('closed');
    setElementWidth(inputDiv,widthOfInputs);
}

const closeInputs = () =>{
    hueInputDiv.classList.add('closed');
    saturationInputDiv.classList.add('closed');
    luminanceInputDiv.classList.add('closed');
    setElementWidth(hueInputDiv,0);
    setElementWidth(saturationInputDiv,0);
    setElementWidth(luminanceInputDiv,0);
}

// Functions for confirmation and insertion of values

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
        displayInvalidInputMessage(hueInputDiv, hueInputAndOkDiv,hueNumberInput, 0, 360);
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
        displayInvalidInputMessage(saturationInputDiv, saturationInputAndOkDiv,saturationNumberInput, 0, 100);
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
        setInputDivsHeight(choiceDivHeight);
        removeSpansFromInputDivs();
        displayThereYouGoMessage();
    }else{
        displayInvalidInputMessage(luminanceInputDiv, luminanceInputAndOkDiv,luminanceNumberInput, 0, 100);
    }
}

hueConfirmBtn.addEventListener('click', confirmHue);

saturationConfirmBtn.addEventListener('click', confirmSaturation);

luminanceConfirmBtn.addEventListener('click', confirmLuminance);

// Expand hue input div when button to choose is clicked

choiceBtn.addEventListener('click', ()=>{
    expandInput(hueInputDiv);
    hueNumberInput.focus();
})

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
const styleElementBorderColorBasedOnBoolean = (element, boolean)=>{
    if (boolean){
        element.style.borderColor = 'green'
    }else{
        element.style.borderColor = 'red'
    }
}

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