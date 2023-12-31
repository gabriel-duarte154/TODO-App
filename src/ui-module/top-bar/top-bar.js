import { svgs } from '../svgs/svgs.js';
import '../../style/top-bar.css';

function generateTopBar() {
	const topBarContainer = document.createElement('div');
	topBarContainer.classList.add('top-bar-container');

	const burgerMenu = createburgerMenu();
	const quickSearch = createQuickSearch();
	const toogleTheme = createToggle();

	topBarContainer.appendChild(burgerMenu);
	topBarContainer.appendChild(quickSearch);
	topBarContainer.appendChild(toogleTheme);

	return topBarContainer;
}

function createburgerMenu() {
	const menu = document.createElement('button');
	menu.classList.add('burger-menu');
	menu.classList.add('btn');
	menu.id = 'burgerMenu';
	menu.innerHTML = svgs.menu;

	return menu;
}

function createQuickSearch() {
	const quickSearch = document.createElement('div');
	quickSearch.classList.add('quick-search');
	quickSearch.innerHTML = svgs.search;

	const input = document.createElement('input');
	input.placeholder = 'Search...';

	const searchModal = document.createElement('div');
	searchModal.classList.add('search-modal');
	searchModal.classList.add('hidden');
	searchModal.id = 'search-options';

	quickSearch.appendChild(input);
	quickSearch.appendChild(searchModal);

	return quickSearch;
}

function createToggle() {
	const toggle = document.createElement('button');
	toggle.classList.add('toggle-theme');
	toggle.classList.add('btn');
	toggle.innerHTML = svgs.sun;
	toggle.innerHTML += svgs.moon;

	const circle = document.createElement('div');
	circle.classList.add('circle');
	circle.id = 'toggle-circle';

	toggle.appendChild(circle);

	return toggle;
}

export { generateTopBar };
