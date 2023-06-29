const storage = localStorage;

const projectStorageModule = (function () {
	if (!storage.getItem('Projects')) {
		storage.setItem('Projects', JSON.stringify([]));
	}

	const projectsData = JSON.parse(storage.getItem('Projects'));

	function saveData(projects) {
		storage.setItem('Projects', JSON.stringify(projects));
	}

	function getProjectsData() {
		return projectsData;
	}

	return {
		saveData,
		getProjectsData,
	};
})();

const navagationStorageModule = (function () {
	if (!storage.getItem('theme')) {
		storage.setItem('theme', JSON.stringify(''));
	}
	const themeData = JSON.parse(storage.getItem('theme'));

	function saveTheme(theme) {
		storage.setItem('theme', JSON.stringify(theme));
	}

	function getTheme() {
		return themeData;
	}

	return {
		saveTheme,
		getTheme,
	};
})();

export { projectStorageModule, navagationStorageModule };
