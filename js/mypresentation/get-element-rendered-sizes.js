export const getElementRenderedHeight = (element)=>{
	const elementRenderedStyles = getComputedStyle(element);
	return parseFloat(elementRenderedStyles.height)
}

export const getElementRenderedBorderWidth = (element)=>{
	const elementRenderedStyles = getComputedStyle(element);
	return parseFloat(elementRenderedStyles.borderWidth)
}

export const getElementRenderedTopMargin = (element)=>{
	const elementRenderedStyles = getComputedStyle(element);
	return parseFloat(elementRenderedStyles.marginTop)
}