import { svgs } from '../svgs/svgs.js';
import '../style/side-bar.css'

function generateSideBar() {
	const sideBarShadow = createSideShadow();
	const sideBarContainer = document.createElement('div');
	sideBarContainer.classList.add('side-bar-container');

	const sideBar = createSideBar();
	sideBarContainer.appendChild(sideBar);

	return [sideBarContainer, sideBarShadow];
}

function createSideShadow() {
	const shadow = document.createElement('div');
	shadow.classList.add('side-bar-shadow');

	return shadow;
}

function createSideBar() {
	const sideBar = document.createElement('div');
	sideBar.classList.add('side-bar');

	const optionsContainer = createOptionsContainer();
	const projectsContainer = createProjctsContainer();

	sideBar.appendChild(optionsContainer);
	sideBar.appendChild(projectsContainer);

	return sideBar;
}

function createOptionsContainer() {
	const optionsContainer = document.createElement('div');
	optionsContainer.classList.add('standard-options');

	let options = [
		{
			name: 'Inbox',
			icon: 'inbox',
		},
		{
			name: 'Today',
			icon: 'today',
		},
		{
			name: 'This week',
			icon: 'calendar',
		},
	];

	options.forEach((option) => {
		const optionContainer = createOption(option);
		optionsContainer.appendChild(optionContainer);
	});

	return optionsContainer;
}

function createOption(option) {
	const container = document.createElement('div');
	container.classList.add('option');

	const spanIcon = document.createElement('span');
	spanIcon.classList.add('icon');
	spanIcon.innerHTML = svgs[option.icon];

	const spanName = document.createElement('span');
	spanName.classList.add('name');
	spanName.textContent = option.name;

	container.appendChild(spanIcon);
	container.appendChild(spanName);

	return container;
}

function createProjctsContainer() {
	const projectsContainer = document.createElement('div');
	projectsContainer.classList.add('projects-container');

	const projectsHeader = createProjectsHeader();
	const projects = createProjects();

	projectsContainer.appendChild(projectsHeader);
	projectsContainer.appendChild(projects);

	return projectsContainer;
}

function createProjectsHeader() {
	const header = document.createElement('div');
	header.classList.add('projects-header');
	header.textContent = 'Projects';

	const span = document.createElement('span');
	span.classList.add('icon');
	span.innerHTML = svgs.plus;

	header.appendChild(span);

	return header;
}

function createProjects() {
	const projects = document.createElement('div');
	projects.classList.add('projects');

	return projects;
}

export { generateSideBar };
