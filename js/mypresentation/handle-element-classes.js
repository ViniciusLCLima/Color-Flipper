export const addClassToElement = (elementQS, newClass) => {
	const element = document.querySelector(elementQS);
	element.classList.add(newClass);
};
export const delClassFromElement = (elementQS, classToRemove) => {
	const element = document.querySelector(elementQS);
	element.classList.remove(classToRemove);
};

const delClassFromTwoElements = (element1, element2, theClass) =>{
	element1.classList.remove(theClass);
	element2.classList.remove(theClass);
}

const delClassFromtwoElementsOnEventOverFirst = (element1, element2, theClass, theEvent)=>{
	element1.addEventListener(theEvent, ()=>{
		delClassFromTwoElements(element1, element2, theClass);
	})
}

const delClassFromTwoElementsOnEventOverAnyOfThem = (element1, element2, theClass, theEvent) =>{
	delClassFromtwoElementsOnEventOverFirst(element1, element2, theClass, theEvent);
	delClassFromtwoElementsOnEventOverFirst(element2, element1, theClass, theEvent);
}

const addClassToTwoElements = (element1, element2, theClass) =>{
	element1.classList.add(theClass);
	element2.classList.add(theClass)
}

const getTwoElementsToGetClassOnEventOverOne = (elementToReceiveEvent, element2, theClass, theEvent) =>{
	elementToReceiveEvent.addEventListener(theEvent,()=>{
		addClassToTwoElements(elementToReceiveEvent, element2, theClass);
	})
}

const getTwoElementsToGetClassOnEventOverAnyOfThem = (element1, element2, theClass, theEvent) => {
	getTwoElementsToGetClassOnEventOverOne(element1, element2, theClass, theEvent);
	getTwoElementsToGetClassOnEventOverOne(element2, element1, theClass, theEvent);
}

export const getTwoElementsToHaveClassAddedAndDeletedOnTwoEvents = (element1,element2, theClass, eventToAddClass, eventToRemoveClass)=>{
	getTwoElementsToGetClassOnEventOverAnyOfThem(element1, element2, theClass, eventToAddClass);
	delClassFromTwoElementsOnEventOverAnyOfThem(element1, element2, theClass, eventToRemoveClass);
}