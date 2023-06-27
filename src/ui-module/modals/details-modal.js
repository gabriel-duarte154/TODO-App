import '../../style/datailsModal.css';
import { svgs } from '../svgs/svgs.js';

const data = [
	{
		text: 'Project',
		id: 'project',
	},
	{
		text: 'Description',
		id: 'description',
	},
	{
		text: 'dueDate',
		id: 'dueDate',
	},
	{
		text: 'Priority',
		id: 'priority',
	},
];

function generateDetailsModal() {
	const container = document.createElement('div');
	container.classList.add('modal-container');

	const modal = document.createElement('div');
	modal.classList.add('modal');

	const btnContainer = document.createElement('div');
	btnContainer.classList.add('btn-container');

	const button = document.createElement('button');
	button.innerHTML = svgs.close;
	button.classList.add('icon');

	const taskNameContainer = document.createElement('div');
	taskNameContainer.classList.add('task-title');

	const otherDetails = generateDetails();

	btnContainer.appendChild(button);
	modal.appendChild(btnContainer);
	modal.appendChild(taskNameContainer);
	otherDetails.forEach((detail) => {
		modal.appendChild(detail);
	});
	container.appendChild(modal);

	return container;
}

function generateDetails() {
	const details = [];
	data.forEach((obj) => {
		const container = document.createElement('div');
		const span = document.createElement('span');

		container.classList.add('title');
		container.textContent = obj.text + ':';
		span.id = obj.id;

		container.appendChild(span);

		details.push(container);
	});

	return details;
}

export { generateDetailsModal };
