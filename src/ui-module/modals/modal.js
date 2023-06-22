import '../../style/modal.css';

function generateModal() {
	const container = document.createElement('div');
	container.classList.add('modal-container');

	const modal = document.createElement('div');
	modal.classList.add('modal');

	const modalHeader = document.createElement('div');
	modalHeader.classList.add('modal-header');

	const contentModal = document.createElement('div');
	contentModal.classList.add('content-modal');

	const inputContainer = document.createElement('div');
	inputContainer.classList.add('input-container');

	const btnsContainer = document.createElement('div');
	btnsContainer.classList.add('btns-container');

	container.appendChild(modal);
	modal.appendChild(modalHeader);
	modal.appendChild(contentModal);
	contentModal.appendChild(inputContainer);
	contentModal.appendChild(btnsContainer);

	return container;
}

export { generateModal };
