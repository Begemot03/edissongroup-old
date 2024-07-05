const disableScroll = () => {
	document.getElementsByTagName('body')[0].style.overflow = "hidden";
}

const enableScroll = () => {
	document.getElementsByTagName('body')[0].style.overflow = null;
}

export { disableScroll, enableScroll }