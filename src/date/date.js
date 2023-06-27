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

function formatDate(date) {
	if (!date) {
		return 'No Date';
	}

	const dateArray = date.split('-');
	const year = dateArray[0];
	const month = dateArray[1];
	const day = dateArray[2];

	return `${month}/${day}/${year}`;
}

export { getDate, formatDate };
