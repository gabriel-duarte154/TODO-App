function addMenuEvent() {
	const bugerMenu = document.querySelector('#burgerMenu');
	bugerMenu.addEventListener('click', openCloseSideBar);
	window.addEventListener('resize', openCloseShadow);
}

function openCloseSideBar() {
  const sideBar = document.querySelector('.side-bar-container');
	if (isOpen(sideBar)) {
		sideBar.classList.add('close');
		sideBar.classList.remove('open');
		openCloseShadow(false);
	} else {
		sideBar.classList.add('open');
		sideBar.classList.remove('close');
		openCloseShadow(true);
	}
}

function isOpen(element) {
	return element.classList.contains('open');
}

function openCloseShadow(status) {
  const sideBarShadow = document.querySelector('.side-bar-shadow');
  const sideBar = document.querySelector('.side-bar-container');
  
	if (window.innerWidth < 800 || status === false) {
		sideBarShadow.style.width = '0';
	}

	if (window.innerWidth >= 800 && (isOpen(sideBar) || status === true)) {
		sideBarShadow.style.width = 'var(--side-bar-width)';
	}
}

export { addMenuEvent };
