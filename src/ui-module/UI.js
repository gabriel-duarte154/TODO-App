import { generateTopBar } from './top-bar/top-bar.js';
import { generateSideBar } from './side-bar/side-bar.js';
import { generateProjectModal } from './modals/project-modal.js';
import { ProjectsModule } from '../Projects/projects.js';
import { svgs } from './svgs/svgs.js';
import { getDate } from '../date/date.js';

const UI = (function () {
	const page = document.querySelector('.page-container');
	const topBar = generateTopBar();
	const sideBar = generateSideBar();
	const projectModal = generateProjectModal();

	function init() {
		page.appendChild(topBar);
		page.appendChild(sideBar[1]);
		page.appendChild(sideBar[0]);
		addEvents();
		addAllProjects();
		addDefalutProjectsEvents();
		openInbox();
	}

	function addEvents() {
		addMenuEvent();
		addToggleThemeEvent();
		modalProjectEvents();
	}

	function addMenuEvent() {
		const bugerMenu = topBar.querySelector('#burgerMenu');
		bugerMenu.addEventListener('click', openCloseSideBar);
		window.addEventListener('resize', openCloseShadow);
	}

	function openCloseSideBar() {
		const sideBarContainer = sideBar[0];
		if (isOpen(sideBarContainer)) {
			sideBarContainer.classList.add('close');
			sideBarContainer.classList.remove('open');
			openCloseShadow(false);
		} else {
			sideBarContainer.classList.add('open');
			sideBarContainer.classList.remove('close');
			openCloseShadow(true);
		}
	}

	function isOpen(element) {
		return element.classList.contains('open');
	}

	function openCloseShadow(status) {
		const sideBarShadow = sideBar[1];
		const sideBarContainer = sideBar[0];

		if (window.innerWidth < 800 || status === false) {
			sideBarShadow.style.width = '0';
		}

		if (
			window.innerWidth >= 800 &&
			(isOpen(sideBarContainer) || status === true)
		) {
			sideBarShadow.style.width = 'var(--side-bar-width)';
		}
	}

	function addToggleThemeEvent() {
		const toggleBtn = topBar.querySelector('.toggle-theme');
		toggleBtn.addEventListener('click', changeTheme);
	}

	function changeTheme() {
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
		const circle = topBar.querySelector('#toggle-circle');
		if (isTheme('dark')) {
			circle.style.transform = 'translateX(-26.5px)';
		} else {
			circle.style.transform = 'translateX(0)';
		}
	}

	function modalProjectEvents() {
		const plus = sideBar[0].querySelector('#project-modal');
		const cancelBtn = projectModal.querySelector('#close-project-modal');
		const addBtn = projectModal.querySelector('#add-project');

		plus.addEventListener('click', openProjectModal);
		cancelBtn.addEventListener('click', closeProjectModal);
		addBtn.addEventListener('click', addProject);
	}

	function openProjectModal() {
		page.appendChild(projectModal);
		projectModal.querySelector('input').focus();
	}

	function closeProjectModal() {
		page.removeChild(projectModal);
		projectModal.querySelector('input').value = '';
	}

	function addProject() {
		let name = projectModal.querySelector('input').value;

		if (!name) return;
		if (ProjectsModule.findProject(name)) {
			alert('Project name already exist.');
			return;
		}

		ProjectsModule.addProject(name);
		appendProject(ProjectsModule.getProject(name));
		closeProjectModal();
	}

	function appendProject(project) {
		const projectsContainer = sideBar[0].querySelector('.projects');
		projectsContainer.appendChild(createProject(project));
	}

	function createProject(project) {
		const container = document.createElement('div');
		container.classList.add('option');
		container.dataset.name = project.name;

		const projectName = document.createElement('span');
		projectName.classList.add('name');
		projectName.textContent = project.name;

		const remove = document.createElement('span');
		remove.classList.add('icon');
		remove.innerHTML = svgs.close;
		remove.addEventListener('click', removeProject);

		container.appendChild(projectName);
		container.appendChild(remove);

		container.addEventListener('click', (e) => {
			if (e.target === container || e.target === projectName) {
				openProjectPage(container);
			}
		});

		return container;
	}

	function openProjectPage(project) {
		const main = createMainPage(project.dataset.name);
		removeActualPage();
		page.appendChild(main);
	}

	function removeProject(e) {
		const name = e.target.parentElement.parentElement.dataset.name;
		const projects = sideBar[0].querySelector('.projects');
		projects.removeChild(e.target.parentElement.parentElement);
		ProjectsModule.removeProject(name);
	}

	function addAllProjects() {
		const projects = ProjectsModule.getAllProjects();
		const projectsContainer = sideBar[0].querySelector('.projects');
		projects.forEach((project) => {
			projectsContainer.appendChild(createProject(project));
		});
	}

	function addDefalutProjectsEvents() {
		const inbox = sideBar[0].querySelector('#inbox');
		const todayProjects = sideBar[0].querySelector('#today');
		const weekProjects = sideBar[0].querySelector('#week');

		inbox.addEventListener('click', openInbox);
		todayProjects.addEventListener('click', openTodayPage);
		weekProjects.addEventListener('click', openWeekPage);
	}

	function openInbox() {
		const main = createMainPage('Inbox');
		removeActualPage();
		appendTasks(getAllTasks, main);
		page.appendChild(main);
	}

	function openTodayPage() {
		const main = createMainPage('Today');
		removeActualPage();
		appendTasks(getTodayTasks, main);
		page.appendChild(main);
	}

	function openWeekPage() {
		const main = createMainPage('This week');
		removeActualPage();
		appendTasks(getWeekTasks, main);
		page.appendChild(main);
	}

	function appendTasks(fun, element) {
		const tasksContainer = element.querySelector('.tasks');
		const tasks = fun();
		tasks.forEach((task) => {
			const container = createTask(task.title);
			tasksContainer.appendChild(container);
		});
	}

	function removeActualPage() {
		const main = page.querySelector('main');
		if (!main) return;
		page.removeChild(main);
	}

	function createMainPage(title) {
		const main = document.createElement('main');

		const header = document.createElement('div');
		header.classList.add('header');

		const headerTitle = document.createElement('div');
		headerTitle.classList.add('project-name');
		headerTitle.textContent = title;

		const mainContent = document.createElement('div');
		mainContent.classList.add('main-content');

		const tasksContainer = document.createElement('div');
		tasksContainer.classList.add('tasks');

		mainContent.appendChild(tasksContainer);
		header.appendChild(headerTitle);
		main.appendChild(header);
		main.appendChild(mainContent);

		return main;
	}

	function getAllTasks() {
		const tasks = ProjectsModule.getAllTasks();
		return tasks;
	}

	function getTodayTasks() {
		const tasks = getAllTasks();
		const todayTasks = tasks.filter(({ addDate }) => {
			const actualDate = getDate();
			return (
				actualDate.year === addDate.year &&
				actualDate.month === addDate.month &&
				actualDate.day === addDate.day
			);
		});

		return todayTasks;
	}

	function getWeekTasks() {
		const tasks = getAllTasks();
		const weekTasks = tasks.filter(({ addDate }) => {
			const actualDate = getDate();
			return (
				actualDate.year === addDate.year &&
				actualDate.month === addDate.month &&
				actualDate.day <= addDate.day + 7
			);
		});

		return weekTasks;
	}

	function createTask(title) {
		const task = document.createElement('div');
		task.classList.add('task');

		const circle = document.createElement('span');
		circle.classList.add('circle');

		const taskName = document.createElement('span');
		taskName.classList.add('name');
		taskName.textContent = title;

		task.appendChild(circle);
		task.appendChild(taskName);

		return task;
	}

	return {
		init,
	};
})();

export { UI };
