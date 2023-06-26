import { getDate } from '../date/date.js';

const ProjectsModule = (function () {
	const Projects = [];

	function addProject(name) {
		Projects.push(Project(name));
	}

	function getAllProjects() {
		return Projects;
	}

	function getProject(name) {
		let index = findIndex(name);
		return Projects[index];
	}

	function findIndex(name) {
		return Projects.findIndex((project) => project.name === name);
	}

	function findProject(name) {
		return Projects.find((project) => project.name === name);
	}

	function removeProject(name) {
		const projectIndex = findIndex(name);
		Projects.splice(projectIndex, 1);
	}

	function getAllTasks() {
		const projects = getAllProjects();
		const tasks = [];
		projects.forEach((project) => {
			tasks.push(...project.getTasks());
		});

		return tasks;
	}

	return {
		addProject,
		getAllProjects,
		getProject,
		findProject,
		removeProject,
		getAllTasks,
	};
})();

function Project(name) {
	const tasks = [];

	function addTask(title, description, dueDate, priority) {
		tasks.push(Task(title, description, dueDate, priority));
	}

	function findTask(title) {
		return tasks.find((task) => task.title === title);
	}

	function getTasks() {
		return tasks;
	}

	return {
		name: name,
		addTask,
		getTasks,
		findTask,
	};
}

function Task(title, description, dueDate, priority) {
	return {
		title: title,
		description: description,
		dueDate: dueDate,
		priority: priority,
		addDate: getDate(),
	};
}

ProjectsModule.addProject('Make');
const make = ProjectsModule.getProject('Make');
make.addTask('test1', 'dasd', '24-05-2024', 'p1');
make.addTask('test2', 'dasd', '24-05-2024', 'p1');
make.addTask('test3', 'dasd', '24-05-2024', 'p1');
make.addTask('test4', 'dasd', '24-05-2024', 'p1');

ProjectsModule.addProject('new');
const newProject = ProjectsModule.getProject('new');
newProject.addTask('test5', 'dasd', '24-05-2024', 'p2');
newProject.addTask('test6', 'dasd', '24-05-2024', 'p1');
newProject.addTask('test7', 'dasd', '24-05-2024', 'p3');
newProject.addTask('test8', 'dasd', '24-05-2024', 'p1');

export { ProjectsModule };
