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
		return Projects.find(
			(project) => project.name.toLowerCase() === name.toLowerCase()
		);
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

	function setProjectName(project, newName) {
		project.name = newName;
		project.updateProjectName(newName);
	}

	return {
		addProject,
		getAllProjects,
		getProject,
		findProject,
		removeProject,
		getAllTasks,
		setProjectName,
	};
})();

function Project(name) {
	const tasks = [];
	let projectName = name;

	function addTask(title, description, dueDate, priority) {
		tasks.push(Task(title, description, dueDate, priority, projectName));
	}

	function findTask(title) {
		return tasks.find((task) => task.title === title);
	}

	function findTaskIndex(title) {
		return tasks.findIndex((task) => task.title === title);
	}

	function getTasks() {
		return tasks;
	}

	function updateProjectName(newName) {
		projectName = newName;
		updateTaskProject();
	}

	function updateTaskProject() {
		tasks.forEach((task) => {
			task.project = projectName;
		});
	}

	function updateTask(task, obj) {
		task.title = obj.title;
		task.description = obj.description;
		task.dueDate = obj.dueDate;
		task.priority = obj.priority;
	}

	function toggleTask(task) {
		task.isDone === true ? task.isDone = false : task.isDone = true;
	}

	function removeTask(task) {
		const taskIndex = findTaskIndex(task.title);
		tasks.splice(taskIndex, 1);
	}

	return {
		name: projectName,
		addTask,
		getTasks,
		findTask,
		findTaskIndex,
		updateTask,
		updateProjectName,
		toggleTask,
		removeTask
	};
}

function Task(title, description, dueDate, priority, project) {
	return {
		title: title,
		description: description,
		dueDate: dueDate,
		priority: priority,
		addDate: getDate(),
		project,
		isDone: false,
	};
}

ProjectsModule.addProject('Todo App');
const app = ProjectsModule.getProject('Todo App');
app.addTask('show details', 'for the todo app', '2023-06-27', 'p1');
app.addTask('task done', 'for the todo app', '2023-06-27', 'p1');
app.addTask('color palete', 'for the todo app', '2023-06-27', 'p2');
app.addTask('hover effects', 'for the todo app', '2023-06-27', 'p2');
app.addTask('storage Module', 'for the todo app', '2023-06-27', 'p1');

export { ProjectsModule };
