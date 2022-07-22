import { getElementRenderedBorderWidth, getElementRenderedHeight, getElementRenderedTopMargin } from "./get-element-rendered-sizes.js";
import { addClassToElement, delClassFromElement } from "./handle-element-classes.js";

//Open/Close Projects
const OPTIONS_UL_QS = '.options-div>ul';
const optionsUl = document.querySelectorAll(OPTIONS_UL_QS);
const PROJECTS_OPTION_ARROW_QS = '.projects-arrow';
const projectsOptionArrow = document.querySelector('.projects-arrow');
const PROJECTS_OPTION_SPAN_QS = '.presentation-option.projects span';
const PROJECTS_DIV_QS = '.options-div.projects';
const projectsDiv = document.querySelector(PROJECTS_DIV_QS);
const menuOptionListElement = document.querySelector('.presentation-option');
const moreProjectsBtn = document.querySelector(".presentation-menu .projects-option-btn");

const getWantedHeightForProjectsDiv = ()=>{
	const BORDER_SIZES = getElementRenderedBorderWidth(menuOptionListElement);
	const HEIGHTS = getElementRenderedHeight(menuOptionListElement);
	const TOP_MARGINS = getElementRenderedTopMargin(menuOptionListElement);
	return `${BORDER_SIZES*3+HEIGHTS*3+TOP_MARGINS*4}px`;
}

moreProjectsBtn.addEventListener('click', () => {
	if (!projectsOptionArrow.classList.contains('open')) {
		projectsDiv.classList.add('open');
		projectsDiv.style.height = getWantedHeightForProjectsDiv();
		projectsDiv.style.borderWidth = '2px';
		addClassToElement(PROJECTS_OPTION_ARROW_QS, 'open');
	}
});

projectsOptionArrow.addEventListener('click', () => {
	if (projectsOptionArrow.classList.contains('open')) {
		projectsDiv.classList.add('open');
		delClassFromElement(PROJECTS_OPTION_ARROW_QS, 'open');
		projectsDiv.style.height = '0px';
		setTimeout(() => {
			projectsDiv.style.borderWidth = '0px';
		}, 400);
	} else {
		projectsDiv.style.height = getWantedHeightForProjectsDiv();
		projectsDiv.style.borderTopWidth = '2px';
		addClassToElement(PROJECTS_OPTION_ARROW_QS, 'open');
	}
});