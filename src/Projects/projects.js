import { getDate } from '../date/date.js';
import { projectStorageModule as storage } from '../storage/storage.js';

const ProjectsModule = (function () {
	const Projects = [];

	if (storage.getProjectsData()) {
		restoreData();
	}

	function restoreData() {
		const data = [...storage.getProjectsData()];
		data.forEach((project) => {
			addProject(project.name);
			const newProject = findProject(project.name);
			project.tasks.forEach((task) => {
				newProject.restoretask(
					task.title,
					task.description,
					task.dueDate,
					task.priority,
					task.project,
					task.addDate,
					task.isDone
				);
			});
		});
		saveData();
	}

	function addProject(name) {
		const project = Project(name);
		Projects.push(project);
		saveData();
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
		saveData();
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
		saveData();
	}

	function saveData() {
		storage.saveData(Projects);
	}

	return {
		addProject,
		getAllProjects,
		getProject,
		findProject,
		removeProject,
		getAllTasks,
		setProjectName,
		saveData,
	};
})();

function Project(name) {
	const tasks = [];
	let projectName = name;

	function addTask(title, description, dueDate, priority) {
		const newTask = Task(title, description, dueDate, priority, projectName);
		tasks.push(newTask);
		ProjectsModule.saveData();
	}

	function restoretask(
		title,
		description,
		dueDate,
		priority,
		project,
		addDate,
		isDone
	) {
		const newTask = Task(
			title,
			description,
			dueDate,
			priority,
			project,
			addDate,
			isDone
		);
		tasks.push(newTask);
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
		ProjectsModule.saveData();
	}

	function toggleTask(task) {
		task.isDone === true ? (task.isDone = false) : (task.isDone = true);
		ProjectsModule.saveData();
	}

	function removeTask(task) {
		const taskIndex = findTaskIndex(task.title);
		tasks.splice(taskIndex, 1);
		ProjectsModule.saveData();
	}

	return {
		tasks,
		name: projectName,
		addTask,
		getTasks,
		findTask,
		findTaskIndex,
		updateTask,
		updateProjectName,
		toggleTask,
		removeTask,
		restoretask,
	};
}

function Task(title, description, dueDate, priority, project, addDate, isDone) {
	return {
		title: title,
		description: description,
		dueDate: dueDate,
		priority: priority,
		project: project,
		addDate: addDate || getDate(),
		isDone: isDone || false,
	};
}

export { ProjectsModule };
