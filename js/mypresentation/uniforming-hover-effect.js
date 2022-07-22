import { getTwoElementsToHaveClassAddedAndDeletedOnTwoEvents } from "./handle-element-classes.js";


// Making sticker mini-picture and sticker message to style together on hover and on click
const presentationMsgQS = '.presentation.msg';
const miniPictureDivQS = '.picture-div.presentation';
const presentationMsg = document.querySelector(presentationMsgQS);
const miniPictureDiv = document.querySelector(miniPictureDivQS);

getTwoElementsToHaveClassAddedAndDeletedOnTwoEvents(miniPictureDiv, presentationMsg,'hover','mouseover','mouseout');

const CSS_VARIABLE_COLOR2 = 'var(--color2)';

miniPictureDiv.addEventListener('mousedown', ()=>{
	presentationMsg.style.backgroundColor = CSS_VARIABLE_COLOR2;
	presentationMsg.style.transition = '0s';
	setTimeout(()=>{
		presentationMsg.removeAttribute('style');
	}, 900)
})

presentationMsg.addEventListener('mousedown', ()=>{
	miniPictureDiv.style.borderColor = CSS_VARIABLE_COLOR2;
	presentationMsg.style.transition = '0s';
	setTimeout(()=>{
		miniPictureDiv.removeAttribute('style');
	}, 900)
})

// Doing the same with projects option and its arrow on hover.
const moreProjectsBtn = document.querySelector(".presentation-menu .projects-option-btn");
const moreProjectsArrow = document.querySelector(".presentation-menu .projects-arrow");
getTwoElementsToHaveClassAddedAndDeletedOnTwoEvents(moreProjectsBtn, moreProjectsArrow,'hover','mouseover','mouseout');