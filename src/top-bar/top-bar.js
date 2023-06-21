import { svgs } from '../svgs/svgs.js';
import '../style/top-bar.css'

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
	const menu = document.createElement('div');
	menu.classList.add('burger-menu');
	menu.classList.add('btn');
	menu.innerHTML = svgs.menu;

	return menu;
}

function createQuickSearch() {
	const quickSearch = document.createElement('div');
	quickSearch.classList.add('quick-search');
	quickSearch.innerHTML = svgs.search;

	const input = document.createElement('input');
	input.placeholder = 'Search...';

	quickSearch.appendChild(input);

	return quickSearch;
}

function createToggle() {
 const toggle =  document.createElement('div');
	toggle.classList.add('togle-theme');
	toggle.classList.add('btn');
	toggle.innerHTML = svgs.sun;
  toggle.innerHTML += svgs.moon;
  
	const circle = document.createElement('div');
  circle.classList.add('circle');
  
  toggle.appendChild(circle);
  
  return toggle;
}

export { generateTopBar };
