const ProjectsModule = (function ProjectsModule() {
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

	return {
		addProject,
		getAllProjects,
		getProject,
		findProject,
		removeProject,
	};
})();

function Project(name) {
	const tasks = [];

	function addTask(title, description, dueDate, priority) {
		tasks.push(Task(title, description, dueDate, priority));
	}

	function getTasks() {
		return tasks;
	}

	return {
		name: name,
		addTask,
		getTasks,
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

function getDate() {
	const fullDate = new Date();
	const day = fullDate.getDate();
	const month = fullDate.getMonth();
	const year = fullDate.getFullYear();

	return {
		day: day,
		month: month + 1,
		year: year,
	};
}

export { ProjectsModule };
