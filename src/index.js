import { generateTopBar } from './top-bar/top-bar.js';
import { generateSideBar } from './side-bar/side-bar.js';

const page = document.querySelector('.page-container');
const topBar = generateTopBar();
const sideBar = generateSideBar();
console.log(sideBar);

page.appendChild(topBar);
page.appendChild(sideBar[1]);
page.appendChild(sideBar[0]);

console.log("it's up to start");
