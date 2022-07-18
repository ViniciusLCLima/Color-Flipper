// Basic functions
const getElementHeight = (elementQS) => {
	const ELEMENT = document.querySelector(elementQS);
	return ELEMENT.offsetHeight;
};

const addClassToElement = (elementQS, newClass) => {
	const element = document.querySelector(elementQS);
	element.classList.add(newClass);
};
const removeClassFromElement = (elementQuerySelector, classToRemove) => {
	const element = document.querySelector(elementQuerySelector);
	element.classList.remove(classToRemove);
};

// Making both the border of the mini-picture and the background of the sticker message to style on hover and on click
const presentationMsgQS = '.presentation.msg';
const miniPictureDivQS = '.picture-div.presentation';
const presentationMsg = document.querySelector(presentationMsgQS);
const miniPictureDiv = document.querySelector(miniPictureDivQS);

presentationMsg.addEventListener('mouseover', () => {
	addClassToElement(miniPictureDivQS, 'hover');
});
presentationMsg.addEventListener('mouseout', () => {
	removeClassFromElement(miniPictureDivQS, 'hover');
});
miniPictureDiv.addEventListener('mouseover', () => {
	addClassToElement(presentationMsgQS, 'hover');
});
miniPictureDiv.addEventListener('mouseout', () => {
	removeClassFromElement(presentationMsgQS, 'hover');
});

const CSS_VARIABLE_COLOR2 = 'var(--color2)'

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


// Open/Close Menu
const closeBtnQS = '.presentation-menu .close-btn';
const MENU_QS = '.presentation-menu';
const closeBtn = document.querySelector(closeBtnQS);
const menu = document.querySelector(MENU_QS);
const PRESENTATION_STICKER_QS = '.presentation-sticker';
const PROJECTS_DIV_QS = '.options-div.projects';
const projectsDiv = document.querySelector(PROJECTS_DIV_QS);

closeBtn.addEventListener('click', () => {
	addClassToElement(MENU_QS, 'closed');
	projectsDiv.style.height = '0px';
	projectsDiv.style.borderWidth = '0px';
	removeClassFromElement(PRESENTATION_STICKER_QS, 'closed');
	removeClassFromElement(PROJECTS_OPTION_ARROW_QS, 'open');
	setTimeout(() => {
		menu.style.borderWidth = '0px';
	}, 30);
});

presentationMsg.addEventListener('click', () => {
	removeClassFromElement(MENU_QS, 'closed');
	addClassToElement(PRESENTATION_STICKER_QS, 'closed');
	setTimeout(() => {
		menu.style.borderWidth = '5px';
	}, 30);
});

miniPictureDiv.addEventListener('click', () => {
	removeClassFromElement(MENU_QS, 'closed');
	addClassToElement(PRESENTATION_STICKER_QS, 'closed');
	setTimeout(() => {
		menu.style.borderWidth = '5px';
	}, 30);
});

// Open/Close "More projects"
const OPTIONS_UL_QS = '.options-div>ul';
const optionsUl = document.querySelectorAll(OPTIONS_UL_QS);
const PROJECTS_OPTION_ARROW_QS = '.projects-arrow';
const projectsOptionArrow = document.querySelector('.projects-arrow');

const PROJECTS_OPTION_SPAN_QS = '.presentation-option.projects span';
const projectsOptionSpan = document.querySelector(PROJECTS_OPTION_SPAN_QS);

projectsOptionSpan.addEventListener('click', () => {
	if (!projectsOptionArrow.classList.contains('open')) {
		projectsDiv.style.height = `${getElementHeight(OPTIONS_UL_QS)}px`;
		projectsDiv.style.borderWidth = '2px';
		addClassToElement(PROJECTS_OPTION_ARROW_QS, 'open');
	}
});

projectsOptionArrow.addEventListener('click', () => {
	if (projectsOptionArrow.classList.contains('open')) {
		removeClassFromElement(PROJECTS_OPTION_ARROW_QS, 'open');
		projectsDiv.style.height = '0px';
		setTimeout(() => {
			projectsDiv.style.borderTopWidth = '0px';
		}, 400);
	} else {
		projectsDiv.style.height = `${getElementHeight(OPTIONS_UL_QS)}px`;
		projectsDiv.style.borderTopWidth = '2px';
		addClassToElement(PROJECTS_OPTION_ARROW_QS, 'open');
	}
});