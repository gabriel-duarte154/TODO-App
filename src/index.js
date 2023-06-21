import { generateTopBar } from './top-bar/top-bar.js';
import { generateSideBar } from './side-bar/side-bar.js';
import { addMenuEvent } from './events/menu-event.js';
import { addToggleThemeEvent } from './events/toggle-theme.js';

const page = document.querySelector('.page-container');
const topBar = generateTopBar();
const sideBar = generateSideBar();

page.appendChild(topBar);
page.appendChild(sideBar[1]);
page.appendChild(sideBar[0]);

addMenuEvent();
addToggleThemeEvent();
