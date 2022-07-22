import { changeColor} from "./color-manipulation.js";

// setting the previous routine to be executed as random button is clicked
const randomColorBtnQS = '.random-btn';
const randomColorBtn = document.querySelector(randomColorBtnQS);

randomColorBtn.addEventListener('click', () => changeColor());

// Get the routine to be executed to get colors when script is executed
window.onload = changeColor();