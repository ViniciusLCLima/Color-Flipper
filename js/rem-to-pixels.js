// Functions to settle size of input divs when user use choice button.
export const convertRemToPixels = (rem)=>{    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
