import {addClassToElement, delClassFromElement} from './handle-element-classes.js'
// Open/Close Menu
const closeBtnQS = '.presentation-menu .close-btn';
const MENU_QS = '.presentation-menu';
const closeBtn = document.querySelector(closeBtnQS);
const menu = document.querySelector(MENU_QS);
const PRESENTATION_STICKER_QS = '.presentation-sticker';
const PROJECTS_DIV_QS = '.options-div.projects';
const projectsDiv = document.querySelector(PROJECTS_DIV_QS);
const miniPictureDivQS = '.picture-div.presentation';
const presentationMsg = document.querySelector('.presentation.msg');
const miniPictureDiv = document.querySelector(miniPictureDivQS);
const PROJECTS_OPTION_ARROW_QS = '.projects-arrow';

closeBtn.addEventListener('click', () => {
	addClassToElement(MENU_QS, 'closed');
	projectsDiv.style.height = '0px';
	projectsDiv.style.borderWidth = '0px';
	delClassFromElement(PRESENTATION_STICKER_QS, 'closed');
	delClassFromElement(PROJECTS_OPTION_ARROW_QS, 'open');
	setTimeout(() => {
		menu.style.borderWidth = '0px';
	}, 30);
});

presentationMsg.addEventListener('click', () => {
	delClassFromElement(MENU_QS, 'closed');
	addClassToElement(PRESENTATION_STICKER_QS, 'closed');
	setTimeout(() => {
		menu.style.borderWidth = '5px';
	}, 30);
});

miniPictureDiv.addEventListener('click', () => {
	delClassFromElement(MENU_QS, 'closed');
	addClassToElement(PRESENTATION_STICKER_QS, 'closed');
	setTimeout(() => {
		menu.style.borderWidth = '5px';
	}, 30);
});