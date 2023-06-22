import { generateModal } from './modal';
import '../../style/modal.css';

function generateProjectModal() {
	const modal = generateModal();
	const inputs = createInputs();
	const btns = createBtns();

	modal.querySelector('.modal-header').textContent = 'Add Project';
	modal.querySelector('.input-container').appendChild(inputs);
	btns.forEach((btn) => {
		modal.querySelector('.btns-container').appendChild(btn);
	});

	return modal;
}

function createInputs() {
	const container = document.createElement('div');
	container.classList.add('field');

	const label = document.createElement('label');
	label.htmlFor = '#name';
	label.textContent = 'Name';

	const input = document.createElement('input');
	input.id = 'name';

	container.appendChild(label);
	container.appendChild(input);

	return container;
}

function createBtns() {
	let btns = [];

	const cancel = document.createElement('button');
	cancel.textContent = 'Cancel';
	cancel.id = 'close-project-modal';

	const add = document.createElement('button');
	add.textContent = 'Add';
	add.id = 'add-project';
	add.classList.add('blue');

	btns.push(cancel);
	btns.push(add);

	return btns;
}

export { generateProjectModal };
