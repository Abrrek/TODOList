'use strict';

document.addEventListener('DOMContentLoaded', () => {

const tasks = {
	'tasks': ['Изучить JavaScript', 
	'Закрепить знания практикой', 
	'Устроиться на работу']
};
const tasksContainer = document.querySelector('.right__tasks');


class Task {
	constructor(text, index) {
		this.text = text;
		tasks.tasks.push(this.text);
		this.render();
	}
}

function renderTasks() {
	tasksContainer.innerHTML = '';
	tasks.tasks.forEach((item, index) => {
		const task = document.createElement('div');
		task.classList.add('right__task');
		task.setAttribute('id', index);
		task.innerHTML = `
		<label for="cbx-${index}" class="right__task-label">
			<input id="cbx-${index}" type="checkbox" class="right__task-hidden-input">
			<div class="right__task-checkbox">
				<svg width="20px" height="20px" viewBox="0 0 20 20">
					<path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
					<polyline points="4 11 8 15 16 6"></polyline>
				</svg>
			</div>
			<p class="right__task-text">${tasks.tasks[index]}</p>
		</label>
		<div class="right__task-transform">
			<div class="right__task-edit">
				<svg class="right__task-edit-svg" width="26px" height="26px" viewBox="-1 -1 50 50">
					<path id="editTask" d="M24,1 L24,1 L24,1 C36.7025492,1 47,11.2974508 47,24 L47,24 L47,24 C47,36.7025492 36.7025492,47 24,47 L24,47 L24,47 C11.2974508,47 1,36.7025492 1,24 L1,24 L1,24 C1,11.2974508 11.2974508,1 24,1 L24,1 Z"></path>
				</svg>
				<span class="right__task-edit-icon-box">
					<svg class="right__task-edit-icon icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 383.947 383.947" style="enable-background:new 0 0 383.947 383.947;" xml:space="preserve"><g>	<g>		<g>			<polygon points="0,303.947 0,383.947 80,383.947 316.053,147.893 236.053,67.893 			"/>			<path d="M377.707,56.053L327.893,6.24c-8.32-8.32-21.867-8.32-30.187,0l-39.04,39.04l80,80l39.04-39.04				C386.027,77.92,386.027,64.373,377.707,56.053z"/>	</g>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>								
				</span>
			</div>
			<div class="right__task-delete">
				<svg class="right__task-delete-svg" width="26px" height="26px" viewBox="-1 -1 50 50">
					<path id="deleteTask" d="M24,1 L24,1 L24,1 C36.7025492,1 47,11.2974508 47,24 L47,24 L47,24 C47,36.7025492 36.7025492,47 24,47 L24,47 L24,47 C11.2974508,47 1,36.7025492 1,24 L1,24 L1,24 C1,11.2974508 11.2974508,1 24,1 L24,1 Z"></path>
				</svg>
				<span class="right__task-delete-icon-box">
					<svg class="right__task-delete-icon icon" height="427pt" viewBox="-40 0 427 427.00131" width="427pt" xmlns="http://www.w3.org/2000/svg"><path d="m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/><path d="m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/><path d="m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0"/><path d="m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/></svg>
				</span>
			</div>
		</div>
		`;
		tasksContainer.append(task);
	});
}

renderTasks();
//----------------------------------------
//----------------------------------------
//----------------------------------------

// Удаление и редактирование задачи
let delOrEditTime = 500,
		delButtonTimer = 0,
		editButtonTimer = 0,
		isDownClickDelButton = true,
		isDownClickEditButton = true,
		editTask;


tasksContainer.addEventListener('mousedown', (e) => {
	const taskTag = e.target.parentNode.parentNode.parentNode.parentNode;
	if (e.target.getAttribute('id') === 'deleteTask') {
		isDownClickDelButton = true;
		const delButtonInterval = setInterval(() => {
			if (delButtonTimer > delOrEditTime) {
				delButtonTimer = 0;
				taskTag.remove();
				tasks.tasks.splice(taskTag.getAttribute('id'), 1);
				clearInterval(delButtonInterval);
			}
			isDownClickDelButton ? delButtonTimer += 4 : delButtonTimer -= 4;
			if (delButtonTimer < 0) {
				delButtonTimer = 0;
				clearInterval(delButtonInterval);
			}
		},4);
	} else if (e.target.getAttribute('id') === 'editTask') {
		isDownClickEditButton = true;
		const editButtonInterval = setInterval(() => {
			if (editButtonTimer > delOrEditTime) {
				editButtonTimer = 0;
				const taskForm = document.querySelector('.right__task-form');
				if (taskForm) {
					taskForm.parentNode.innerHTML = editTask;
				}
				addEditForm(taskTag);
				clearInterval(editButtonInterval);
			}
			isDownClickEditButton ? editButtonTimer += 4 : editButtonTimer -= 4;
			if (editButtonTimer < 0) {
				editButtonTimer = 0;
				clearInterval(editButtonInterval);
			}
		},4);
	} else if (e.target.getAttribute('id') === 'editTaskSave') {
		tasks.tasks[e.target.parentNode.parentNode.getAttribute('id')] = e.target.parentNode.querySelector('input').value;
		renderTasks();
		e.target.parentNode.parentNode.innerHTML = editTask;
		console.log(tasks.tasks);
	} else if (e.target.getAttribute('id') === 'editTaskCancel') {
		e.target.parentNode.parentNode.innerHTML = editTask;
	}

});
tasksContainer.addEventListener('mouseup', () => {
	isDownClickDelButton = false;
	isDownClickEditButton = false;
});

function addEditForm(task) {
	let editForm = `
	<div class="right__task-form">
		<input class="right__task-form-input" type="text" value="${task.querySelector('.right__task-text').innerHTML}">
		<button class="right__task-form-save primary-button" id="editTaskSave">Сохранить</button>
		<button class="right__task-form-cancel secondary-button" id="editTaskCancel">Отмена</button>
	</div>
	`;
	editTask = task.innerHTML;
	task.innerHTML = editForm;
}

//----------------------------------------
//----------------------------------------
//----------------------------------------
// Добавление задачи

const createTask = document.querySelector('.right__create'),
			createTaskForm = createTask.querySelector('.right__create-form'),
			createTaskInput = createTaskForm.querySelector('input');

createTask.addEventListener('click', (e) => {
	const tClass = e.target.classList[0];
	if (tClass === 'right__create-button' || tClass === 'right__create-icon' || tClass === 'right__create-text') {
		createTaskForm.classList.add('right__create-form-active');
	} else if (tClass === 'right__create-add') {
		if (createTaskInput.value) {
			tasks.tasks.push(createTaskInput.value);
			renderTasks();
			createTaskInput.value = '';
		}
	} else if (tClass === 'right__create-cancel') {
		createTaskForm.classList.remove('right__create-form-active');
	}
});
addEventListener('keydown', (e) => {
	if (e.keyCode === 13 && document.activeElement === createTaskInput) {
		if (createTaskInput.value) {
			tasks.tasks.push(createTaskInput.value);
			renderTasks();
			createTaskInput.value = '';
		}
	} else if (e.keyCode === 27 && document.activeElement === createTaskInput) {
		createTaskForm.classList.remove('right__create-form-active');
	}
});

//----------------------------------------
//----------------------------------------
//----------------------------------------
// Добавление папки

const createFolder = document.querySelector('.left__create'),
			createFolderForm = document.querySelector('.left__creating');

createFolder.addEventListener('click', (e) => {
	const tClass = e.target.classList[0];
	if (tClass === 'left__create-button' || tClass === 'left__create-icon' || tClass === 'left__create-text') {
		createFolderForm.classList.add('left__creating-active');
	} else if (tClass === 'left__creating-close') {
		createFolderForm.classList.remove('left__creating-active');
	} else if (tClass === 'left__creating-button') {
		
	}
	console.log(e.target);
});

});