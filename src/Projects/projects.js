const ProjectsModule = (function ProjectsModule() {
	const Projects = [];

	function addProject(name) {
		Projects.push(Project(name));
		console.log(Projects);
	}

	function getAllProjects() {
		return Projects;
	}

	function getProject(i) {
		return Projects[i];
	}

	return {
		addProject,
		getAllProjects,
		getProject,
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
