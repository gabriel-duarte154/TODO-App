import { generateTopBar } from './top-bar/top-bar.js';
import { generateSideBar } from './side-bar/side-bar.js';
import { generateProjectModal } from './modals/project-modal.js';
import { ProjectsModule } from '../Projects/projects.js';
import { svgs } from './svgs/svgs.js';
import { getDate } from '../date/date.js';
import { generateTaskModal } from './modals/task-modal.js';

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
		changePageModule.init();
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

	const changePageModule = (function () {
		const Pages = [];
		const sideBarContainer = sideBar[0];
		let currentPage = null;

		function createPage(name) {
			const page = createMainPage(name);
			return {
				name: name,
				page: page,
			};
		}

		function createMainPage(title) {
			const main = document.createElement('main');
			main.id = title;

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

		function createDefalutPages() {
			const inboxPage = createPage('Inbox');
			const todayPage = createPage('Today');
			const weekPage = createPage('Week');

			Pages.push(inboxPage);
			Pages.push(todayPage);
			Pages.push(weekPage);
		}

		function addDefalutProjectsEvents() {
			const inbox = sideBarContainer.querySelector('#inbox');
			const todayProjects = sideBarContainer.querySelector('#today');
			const weekProjects = sideBarContainer.querySelector('#week');

			inbox.addEventListener('click', () => {
				openDefalutPage('Inbox', getAllTasks);
			});
			todayProjects.addEventListener('click', () => {
				openDefalutPage('Today', getTodayTasks);
			});
			weekProjects.addEventListener('click', () => {
				openDefalutPage('Week', getWeekTasks);
			});
		}

		function openDefalutPage(pageName, fun) {
			const defaultPage = findPage(pageName);
			appendTasks(fun, defaultPage);
			openPage(pageName);
		}

		function closeCurrentpage() {
			if (!currentPage) return;
			page.removeChild(currentPage);
		}

		function findIndex(name) {
			return Pages.findIndex((page) => page.name === name);
		}

		function findPage(name) {
			const index = findIndex(name);
			return Pages[index].page;
		}

		function appendTasks(fun, element) {
			const tasksContaier = element.querySelector('.tasks');
			tasksContaier.innerHTML = '';
			const tasks = fun();
			tasks.forEach((task) => {
				const container = createTask(task);
				tasksContaier.appendChild(container);
			});
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

		function createTask(task) {
			const taskContainer = document.createElement('div');
			taskContainer.classList.add('task');

			const circle = document.createElement('span');
			circle.classList.add('circle');

			const taskName = document.createElement('span');
			taskName.classList.add('name');
			taskName.textContent = task.title;

			const removeIcon = document.createElement('span');
			removeIcon.innerHTML = svgs.close;
			removeIcon.classList.add('icon');

			const editIcon = document.createElement('span');
			editIcon.innerHTML = svgs.pen;
			editIcon.classList.add('icon');

			removeIcon.addEventListener('click', () => {
				removeTask(task);
			});

			editIcon.addEventListener('click', () => {
				editTask(task);
				console.log(task);
			});

			taskContainer.appendChild(circle);
			taskContainer.appendChild(taskName);
			taskContainer.appendChild(editIcon);
			taskContainer.appendChild(removeIcon);

			return taskContainer;
		}

		function removeTask(task) {
			const project = ProjectsModule.getProject(task.project);
			const tasks = project.getTasks();
			const taskIndex = project.findTaskIndex(task.title);

			tasks.splice(taskIndex, 1);

			const pageData = getPage(task);

			updateDefaultPages();
			updatePage(pageData);
		}

		function getPage(task) {
			return Pages.find((page) => page.name === task.project);
		}

		function editTask(task) {
			const modal = generateTaskModal();
			const title = modal.querySelector('.modal-header');
			const saveBtn = modal.querySelector('#addTask');
			const cancelBtn = modal.querySelector('#closeModal');

			title.textContent = 'Editing';
			saveBtn.textContent = 'save';

			fillInputs(task, modal);

			saveBtn.addEventListener('click', () => {
				updateTask(task, modal);
			});
			cancelBtn.addEventListener('click', () => {
				closeModal(modal);
			});

			page.appendChild(modal);
			modal.querySelector('#title').focus();
		}

		function getInputsValues(modal) {
			const title = modal.querySelector('#title');
			const description = modal.querySelector('#description');
			const dueDate = modal.querySelector('#dueDate');
			const priority = modal.querySelector('#priority');

			return {
				title: title.value,
				description: description.value,
				dueDate: dueDate.value,
				priority: priority.value,
			};
		}

		function fillInputs(task, modal) {
			const title = modal.querySelector('#title');
			const description = modal.querySelector('#description');
			const dueDate = modal.querySelector('#dueDate');
			const priority = modal.querySelector('#priority');

			title.value = task.title;
			description.value = task.description;
			dueDate.value = task.dueDate;
			priority.value = task.priority;
		}

		function updateTask(task, modal) {
			const project = ProjectsModule.getProject(task.project);
			const newData = getInputsValues(modal);

			if (project.findTask(newData.title) && newData.title !== task.title) {
				alert('Task name already exist.');
				return false;
			}
			project.updateTask(task, newData);
			updateDefaultPages();
			updatePage(getPage(task));
			closeModal(modal);
		}

		function active() {
			const triggers = sideBarContainer.querySelectorAll('.option');
			const currentPageId = currentPage.id;

			triggers.forEach((trigger) => {
				if (trigger.id.toLowerCase() === currentPageId.toLowerCase()) {
					trigger.classList.add('active');
				} else {
					trigger.classList.remove('active');
				}
			});
		}

		function appendProject(project) {
			const projectsContainer = sideBarContainer.querySelector('.projects');
			projectsContainer.appendChild(createProject(project));
			const newpage = createNewPage(project);
			Pages.push(newpage);
		}

		function createProject(project) {
			const container = document.createElement('div');
			container.classList.add('option');
			container.id = project.name;

			const projectName = document.createElement('span');
			projectName.classList.add('name');
			projectName.textContent = project.name;

			const remove = document.createElement('span');
			remove.classList.add('icon');
			remove.innerHTML = svgs.close;
			remove.addEventListener('click', () => {
				removeProject(container);
			});

			container.appendChild(projectName);
			container.appendChild(remove);

			container.addEventListener('click', (e) => {
				if (e.target === container || e.target === projectName) {
					openPage(container.id);
				}
			});

			return container;
		}

		function removeProject(container) {
			const projects = sideBarContainer.querySelector('.projects');
			const pageIndex = findIndex(container.id);

			projects.removeChild(container);
			ProjectsModule.removeProject(container.id);

			if (currentPage === findPage(container.id)) {
				openDefalutPage('Inbox', getAllTasks);
			}
			removeProjectPage(pageIndex);
			updateDefaultPages();
		}

		function updateDefaultPages() {
			Pages.forEach((object) => {
				if (object.name === 'Inbox') {
					appendTasks(getAllTasks, object.page);
				}
				if (object.name === 'Today') {
					appendTasks(getTodayTasks, object.page);
				}
				if (object.name === 'Week') {
					appendTasks(getWeekTasks, object.page);
				}
			});
		}

		function removeProjectPage(index) {
			Pages.splice(index, 1);
		}

		function addAllProjects() {
			const projects = ProjectsModule.getAllProjects();
			const projectsContainer = sideBarContainer.querySelector('.projects');
			projects.forEach((project) => {
				projectsContainer.appendChild(createProject(project));
				const newpage = createNewPage(project);
				Pages.push(newpage);
			});
		}

		function createNewPage(project) {
			const newPage = createPage(project.name);
			const btn = document.createElement('button');
			btn.classList.add('btn-add');
			const icon = document.createElement('span');
			icon.classList.add('icon');
			icon.innerHTML = svgs.plus;
			const span = document.createElement('span');
			span.textContent = 'Add Task';

			addPageFunction(newPage);

			btn.appendChild(icon);
			btn.appendChild(span);

			btn.addEventListener('click', () => {
				openTaskModal(newPage);
			});
			newPage.page.appendChild(btn);

			if (ProjectsModule.findProject(project.name)) {
				const tasks = getProjectTasks(project.name);
				const tasksPlace = newPage.page.querySelector('.tasks');

				tasks.forEach((task) => {
					let taskContainer = createTask(task);
					tasksPlace.appendChild(taskContainer);
				});
			}
			return newPage;
		}

		function addPageFunction(pageData) {
			const header = pageData.page.querySelector('.header');
			const editIcon = document.createElement('span');
			editIcon.innerHTML = svgs.pen;
			editIcon.classList.add('icon');
			editIcon.classList.add('hidden');

			header.addEventListener('mouseover', () => {
				editIcon.classList.remove('hidden');
			});
			header.addEventListener('mouseout', () => {
				editIcon.classList.add('hidden');
			});

			editIcon.addEventListener('click', () => {
				openEditProjectModal(pageData.name);
			});

			header.appendChild(editIcon);
		}

		function openEditProjectModal(projectName) {
			const modal = generateProjectModal();
			const header = modal.querySelector('.modal-header');
			const input = modal.querySelector('input');
			const save = modal.querySelector('#add-project');
			const cancel = modal.querySelector('#close-project-modal');

			header.textContent = 'Editing Project';
			input.value = projectName;
			save.textContent = 'save';

			save.addEventListener('click', () => {
				updateProjectName(input.value, projectName, modal);
			});
			cancel.addEventListener('click', () => {
				closeModal(modal);
			});

			page.appendChild(modal);
			input.focus();
		}

		function updateProjectName(newName, projectName, modal) {
			if (!isvalidProject(newName) && newName !== projectName) {
				alert('Project name already exist or is a invalid name');
				return;
			}

			if (!newName) return;

			const project = ProjectsModule.findProject(projectName);
			ProjectsModule.setProjectName(project, newName);
			const pageIndex = Pages.findIndex((page) => page.name === projectName);
			const newPage = createNewPage(project);
			Pages.splice(pageIndex, 1, newPage);
			updateSidebar();
			openPage(newPage.name);
			closeModal(modal);
		}

		function updateSidebar() {
			const projects = ProjectsModule.getAllProjects();
			const projectsTriggers = sideBarContainer.querySelector('.projects');
			projectsTriggers.innerHTML = '';
			projects.forEach((project) => {
				projectsTriggers.appendChild(createProject(project));
			});
		}

		function getProjectTasks(projectName) {
			const project = ProjectsModule.getProject(projectName);
			const tasks = project.getTasks();
			return tasks;
		}

		function openTaskModal(pageData) {
			const modal = generateTaskModal();
			addEventsTaskModal(modal, pageData);
			page.appendChild(modal);
			modal.querySelector('#title').focus();
		}

		function addEventsTaskModal(modal, pageData) {
			const addBtn = modal.querySelector('#addTask');
			const cancelBtn = modal.querySelector('#closeModal');
			const inputs = modal.querySelector('.input-container');

			addBtn.addEventListener('click', () => {
				addTask(inputs, pageData);
			});
			cancelBtn.addEventListener('click', () => {
				closeModal(modal);
			});
		}

		function addTask(inputs, pageData) {
			const title = inputs.querySelector('#title');
			const description = inputs.querySelector('#description');
			const date = inputs.querySelector('#dueDate');
			const priority = inputs.querySelector('#priority');
			const project = ProjectsModule.getProject(pageData.name);

			if (!title.value) {
				alert('The task must have at least a title');
				return;
			}

			if (project.findTask(title.value)) {
				alert('The task title already exist');
				return;
			}

			project.addTask(
				title.value,
				description.value,
				date.value,
				priority.value
			);

			clearInputs([title, description, date]);
			priority.value = 'p1';
			updatePage(pageData);
		}

		function clearInputs(inputs) {
			inputs.forEach((input) => (input.value = ''));
		}

		function closeModal(modal) {
			page.removeChild(modal);
		}

		function updatePage(pageData) {
			const taskContainer = pageData.page.querySelector('.tasks');
			const tasks = ProjectsModule.getProject(pageData.name).getTasks();

			taskContainer.innerHTML = '';

			tasks.forEach((task) => {
				taskContainer.appendChild(createTask(task));
			});
		}

		function openPage(pageName) {
			const projectPage = findPage(pageName);
			closeCurrentpage();
			currentPage = projectPage;
			page.appendChild(projectPage);
			active();
		}

		function isInvalidName(name) {
			const isValid = Pages.find(
				(page) => page.name.toLowerCase() === name.toLowerCase()
			)
				? true
				: false;

			return isValid;
		}

		function isvalidProject(name) {
			if (isInvalidName(name)) {
				return false;
			}

			return true;
		}

		function init() {
			createDefalutPages();
			addDefalutProjectsEvents();
			openDefalutPage('Inbox', getAllTasks);
			addAllProjects();
		}

		return {
			init,
			appendProject,
			isvalidProject,
		};
	})();

	function addProject() {
		let name = projectModal.querySelector('input').value;
		if (!name) return;
		if (!changePageModule.isvalidProject(name)) {
			alert('Project name already exist or is a invalid name');
			return;
		}

		ProjectsModule.addProject(name);
		changePageModule.appendProject(ProjectsModule.getProject(name));
		closeProjectModal();
	}

	return {
		init,
	};
})();

export { UI };
