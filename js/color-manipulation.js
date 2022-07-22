// Functions to get values for colors

const getOneOfTwoValuesBasedIfAnotherIsGreaterThanFifty = (valueToEvaluate, ifIs, ifNot) => {
    if (valueToEvaluate>50){
        return ifIs
    }
    return ifNot
}

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

const getContrastingHslAsArrayFromHslAsArray = (hslArray)=>{
    let hue = hslArray[0];
    const saturation = 85;
    let lightness = hslArray[2];
    hue = hue<=180 ? hue + 180 : hue - 180
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
    const contrastingColor = [hue, saturation, lightness];
    return contrastingColor;
}

const getAccentHslAsArrayFromHslAsArray = (hslArray)=>{
    let hue = hslArray[0];
    let saturation = hslArray[1];
    let lightness = hslArray[2];
    hue = hue<=180 ? hue + 90 : hue - 90;
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
    const accentColor = [hue, saturation, lightness];
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

// Routine for the changing of the background color.
export const changeColor = (bgColor)=>{
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
    const rootElement = document.querySelector(":root");
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