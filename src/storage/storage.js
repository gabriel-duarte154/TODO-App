const storage = localStorage;
if (!storage.getItem('Projects')) storage.setItem('Projects', JSON.stringify([]));

const storageModule = (function () {
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

export { storageModule };