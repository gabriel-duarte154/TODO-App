function addToggleThemeEvent() {
	const toggleBtn = document.querySelector('.toggle-theme');
	toggleBtn.addEventListener('click', chageTheme);
}

function chageTheme() {
	let theme = document.documentElement;
	if (isTheme('dark')) {
		theme.classList.remove('dark');
		moveToggle();
	} else {
		theme.classList.add('dark');
		moveToggle();
	}
}

function isTheme(theme) {
	return document.documentElement.classList.contains(theme);
}

function moveToggle() {
	const circle = document.querySelector('#toggle-circle');
	if (isTheme('dark')) {
		circle.style.transform = 'translateX(-26.5px)';
	} else {
		circle.style.transform = 'translateX(0)';
	}
}

export { addToggleThemeEvent };
