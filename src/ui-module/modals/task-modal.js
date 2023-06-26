import { generateModal } from './modal.js';

function generateTaskModal() {
	const modal = generateModal();
	const header = modal.querySelector('.modal-header');
	const inputsContainer = modal.querySelector('.input-container');
	const inputsData = [
		{
			type: 'text',
			id: 'title',
			title: 'Title',
		},
		{
			type: 'text',
			id: 'description',
			title: 'Description',
		},
		{
			type: 'date',
			id: 'dueDate',
			title: 'dueDate',
		},
		{
			type: 'select',
			id: 'priority',
			title: 'priority',
			options: ['p1', 'p2', 'p3'],
		},
	];

	const inputsHTML = [
		createInput(inputsData[0]),
		createInput(inputsData[1]),
		createInput(inputsData[2]),
		createSelectInput(inputsData[3]),
	];

	header.textContent = 'Add Task';

	const addBtn = createAddBtn();
	const cancelBtn = createCancelBtn();

	modal.querySelector('.btns-container').appendChild(cancelBtn);
	modal.querySelector('.btns-container').appendChild(addBtn);

	inputsHTML.forEach((input) => inputsContainer.appendChild(input));

	return modal;
}

function createBasicInputField(obj) {
	const field = document.createElement('div');
	field.classList.add('field');

	const label = document.createElement('label');
	label.textContent = obj.title;
	label.htmlFor = obj.id;

	field.appendChild(label);

	return field;
}

function createInput(obj) {
	const basicInput = createBasicInputField(obj);

	const input = document.createElement('input');
	input.type = obj.type;
	input.id = obj.id;

	basicInput.appendChild(input);

	return basicInput;
}

function createSelectInput(obj) {
	const basicInput = createBasicInputField(obj);
	const select = document.createElement('select');
	select.id = obj.id;

	obj.options.forEach((option) => {
		const container = document.createElement('option');
		container.textContent = option;
		select.appendChild(container);
	});

	basicInput.appendChild(select);

	return basicInput;
}

function createAddBtn() {
	const btn = document.createElement('button');
	btn.classList.add('blue');
	btn.textContent = 'Add';
	btn.id = 'addTask';

	return btn;
}

function createCancelBtn() {
	const btn = document.createElement('button');
	btn.textContent = 'Cancel';
	btn.id = 'closeModal';

	return btn;
}

export { generateTaskModal };
