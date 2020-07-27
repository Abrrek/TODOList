'use strict';

let showObj;
let showCheckedColor;

document.addEventListener('DOMContentLoaded', () => {

//-------------------------
document.querySelectorAll('.scroll').forEach(scroll => {
	scroll.style.maxHeight = `${document.querySelector('body').clientHeight - 60 - 148 - 150}px`;
});

window.addEventListener('resize', () => {
	document.querySelectorAll('.scroll').forEach(scroll => {
		scroll.style.maxHeight = `${document.querySelector('body').clientHeight - 60 - 148 - 150}px`;
	});
});
//--------------------

const tasks = {
	'folders': {
		'folder0': {
			'name': 'Покупки',
			'id': 0,
			'circleColor': '#f3296d',
			'tasks': ['Изучить JavaScript', 
								'Закрепить знания практикой', 
								'Устроиться на работу',
								'Разрработать несколько приложений',
								'Попробовать себя на фрилансе',
								'Изучить JavaScript', 
								'Закрепить знания практикой', 
								'Устроиться на работу',
								'Разрработать несколько приложений',
								'Попробовать себя на фрилансе',
								'Изучить JavaScript', 
								'Закрепить знания практикой', 
								'Устроиться на работу',
								'Разрработать несколько приложений',
								'Попробовать себя на фрилансе'
							],
			'performedTasksID': [1]
		},
		'folder1': {
			'name': 'Обучение',
			'id': 1,
			'circleColor': '#f3296d',
			'tasks': ['Продолжить обучение на курсе', 
								'Закрепить знания практикой'
							],
			'performedTasksID': [0]
		},
		'folder2': {
			'name': 'Программирование',
			'id': 2,
			'circleColor': '#f3296d',
			'tasks': ['Разработать TODOList', 
								'Сделать рефакторинг кода', 
								'Продолжить обучение на курсе'],
			'performedTasksID': [1, 2]
		},
		'folder3': {
			'name': 'Покупки-1',
			'id': 3,
			'circleColor': '#f3296d',
			'tasks': ['Изучить JavaScript', 
								'Закрепить знания практикой', 
								'Устроиться на работу',
								'Разрработать несколько приложений',
								'Попробовать себя на фрилансе'
							],
			'performedTasksID': [1]
		},
		'folder4': {
			'name': 'Обучение-2',
			'id': 4,
			'circleColor': '#f3296d',
			'tasks': ['Продолжить обучение на курсе', 
								'Закрепить знания практикой'
							],
			'performedTasksID': [0]
		},
		'folder5': {
			'name': 'Программирование-3',
			'id': 5,
			'circleColor': '#f3296d',
			'tasks': ['Разработать TODOList', 
								'Сделать рефакторинг кода', 
								'Продолжить обучение на курсе'],
			'performedTasksID': [1, 2]
		}
	}
};

let activeFolder = tasks.folders.folder0;

function activatedFolder() {
	document.querySelectorAll('.left__folder').forEach(folder => {
		if (folder.querySelector('p').textContent === activeFolder.name) {
			folder.classList.add('left__folder-active');
		}
	});
}

const folderFormColors = ['#a60000',
													'#5d8114',
													'#8455bf',
													'#1f0351',
													'#b69200',
													'#ff5600',
													'#f3296d',
													'#009641'
												];

	
const folderFormCircles = document.querySelectorAll('.left__creating-radio');

const tasksContainer = document.querySelector('.right__tasks'),
			foldersContainer = document.querySelector('.left__folders');

folderFormCircles.forEach((circle, index) => {
	circle.style.backgroundColor = folderFormColors[index];
});
function renderTasks(isAddedNewTask = false) {
	document.querySelector('.right__header-text').style.color = activeFolder.circleColor;
	if (!activeFolder) {
		document.querySelector('.right__header-text').textContent = '';
		tasksContainer.innerHTML = 'Задачи отсутствуют';
	} else {
		if (!activeFolder.tasks.length) {
			tasksContainer.innerHTML = 'Задачи отсутствуют';
		} else {
			document.querySelector('.right__header-text').textContent = activeFolder.name;
			tasksContainer.innerHTML = '';
			activeFolder.tasks.forEach((item, index) => {
				const task = document.createElement('div');
				task.classList.add('right__task');
				task.setAttribute('id', index);
				if (isAddedNewTask && index === (activeFolder.tasks.length - 1)) {
					task.style.opacity = '0';
					setTimeout(() => task.classList.add('right__task-last'), 100);
				}
				let performedTask = '';
				if (activeFolder.performedTasksID.indexOf(index) != -1 ) {
					performedTask = 'checked';
				}
				task.innerHTML = `
					<label for="cbx-${index}" class="right__task-label">
					<div class="right__task-overlay overlay"></div>
					<input id="cbx-${index}" type="checkbox" class="right__task-hidden-input" ${performedTask}>
					<div class="right__task-checkbox">
					<svg width="20px" height="20px" viewBox="0 0 20 20">
					<path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
					<polyline points="4 11 8 15 16 6"></polyline>
					</svg>
					</div>
					<p class="right__task-text">${activeFolder.tasks[index]}</p>
					</label>
					<div class="right__task-transform">
					<div class="right__task-edit">
					<svg class="right__task-edit-svg" width="26px" height="26px" viewBox="-1 -1 50 50">
								<path class="editTask" d="M24,1 L24,1 L24,1 C36.7025492,1 47,11.2974508 47,24 L47,24 L47,24 C47,36.7025492 36.7025492,47 24,47 L24,47 L24,47 C11.2974508,47 1,36.7025492 1,24 L1,24 L1,24 C1,11.2974508 11.2974508,1 24,1 L24,1 Z"></path>
								</svg>
								<span class="right__task-edit-icon-box">
								<svg class="right__task-edit-icon icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 383.947 383.947" style="enable-background:new 0 0 383.947 383.947;" xml:space="preserve"><g>	<g>		<g>			<polygon points="0,303.947 0,383.947 80,383.947 316.053,147.893 236.053,67.893 			"/>			<path d="M377.707,56.053L327.893,6.24c-8.32-8.32-21.867-8.32-30.187,0l-39.04,39.04l80,80l39.04-39.04				C386.027,77.92,386.027,64.373,377.707,56.053z"/>	</g>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>								
								</span>
								</div>
								<div class="right__task-delete">
								<svg class="right__task-delete-svg" width="26px" height="26px" viewBox="-1 -1 50 50">
								<path class="deleteTask" d="M24,1 L24,1 L24,1 C36.7025492,1 47,11.2974508 47,24 L47,24 L47,24 C47,36.7025492 36.7025492,47 24,47 L24,47 L24,47 C11.2974508,47 1,36.7025492 1,24 L1,24 L1,24 C1,11.2974508 11.2974508,1 24,1 L24,1 Z"></path>
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
	}
}
			
function renderFolders() {
	foldersContainer.innerHTML = '';
	for (let folder of Object.keys(tasks.folders)) {
		const folderTemplate = document.createElement('div');
		folderTemplate.classList.add('left__folder');
		folderTemplate.setAttribute('id', tasks.folders[folder].id);
		if (activeFolder.id === tasks.folders[folder].id) {
			folderTemplate.classList.add('left__folder-active');
		}
		folderTemplate.innerHTML = `
		<div class="left__folder-overlay"></div>
			<div class="left__folder-circle" style="background-color: ${tasks.folders[folder].circleColor};"></div>
			<p class="left__folder-text">${tasks.folders[folder].name}</p>
			<div class="left__folder-transform">
				<div class="left__folder-edit">
					<svg class="left__folder-edit-svg" width="26px" height="26px" viewBox="-1 -1 50 50">
						<path class="editFolder" d="M24,1 L24,1 L24,1 C36.7025492,1 47,11.2974508 47,24 L47,24 L47,24 C47,36.7025492 36.7025492,47 24,47 L24,47 L24,47 C11.2974508,47 1,36.7025492 1,24 L1,24 L1,24 C1,11.2974508 11.2974508,1 24,1 L24,1 Z"></path>
					</svg>
					<span class="left__folder-edit-icon-box">
						<svg class="left__folder-edit-icon icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 383.947 383.947" style="enable-background:new 0 0 383.947 383.947;" xml:space="preserve"><g>	<g>		<g>			<polygon points="0,303.947 0,383.947 80,383.947 316.053,147.893 236.053,67.893 			"/>			<path d="M377.707,56.053L327.893,6.24c-8.32-8.32-21.867-8.32-30.187,0l-39.04,39.04l80,80l39.04-39.04				C386.027,77.92,386.027,64.373,377.707,56.053z"/>	</g>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>								
					</span>
				</div>
				<div class="left__folder-delete">
					<svg class="left__folder-delete-svg" width="26px" height="26px" viewBox="-1 -1 50 50">
						<path class="deleteFolder" d="M24,1 L24,1 L24,1 C36.7025492,1 47,11.2974508 47,24 L47,24 L47,24 C47,36.7025492 36.7025492,47 24,47 L24,47 L24,47 C11.2974508,47 1,36.7025492 1,24 L1,24 L1,24 C1,11.2974508 11.2974508,1 24,1 L24,1 Z"></path>
					</svg>
					<span class="left__folder-delete-icon-box">
						<svg class="left__folder-delete-icon icon" height="427pt" viewBox="-40 0 427 427.00131" width="427pt" xmlns="http://www.w3.org/2000/svg"><path d="m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/><path d="m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/><path d="m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0"/><path d="m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/></svg>
					</span>
				</div>
			</div>
		`;
		foldersContainer.append(folderTemplate);
	}
}

function arrayRandElement(arr) {
	const rand = Math.floor(Math.random() * arr.length);
	return arr[rand];
}

renderFolders();
activatedFolder();
renderTasks();
//----------------------------------------
//----------------------------------------
//----------------------------------------

// Удаление и редактирование задачи
let delOrEditTime = 500,
		delTaskButtonTimer = 0,
		editTaskButtonTimer = 0,
		isDownClickDelTaskButton = true,
		isDownClickEditTaskButton = true,
		editTask;


tasksContainer.addEventListener('mousedown', (e) => {
	if (e.target.classList[0] === 'right__task-overlay') {
		const taskID = +e.target.parentNode.parentNode.getAttribute('id');
		if (activeFolder.performedTasksID.indexOf(taskID) === -1) {
			activeFolder.performedTasksID.push(taskID);
		} else {
			activeFolder.performedTasksID.splice(activeFolder.performedTasksID.indexOf(taskID), 1);
		}
	}
	const taskTag = e.target.parentNode.parentNode.parentNode.parentNode;
	let taskInput,
			taskForm;
	if (e.target.classList[0] === 'deleteTask') {
		isDownClickDelTaskButton = true;
		const delButtonInterval = setInterval(() => {
			if (delTaskButtonTimer > delOrEditTime) {
				delTaskButtonTimer = 0;
				activeFolder.tasks.splice(taskTag.getAttribute('id'), 1);
				if (activeFolder.performedTasksID.indexOf(+taskTag.getAttribute('id')) !== -1) {
					activeFolder.performedTasksID.splice(activeFolder.performedTasksID.indexOf(+taskTag.getAttribute('id')), 1);
				}
				activeFolder.performedTasksID.forEach((id, index) => {
					if (id > +taskTag.getAttribute('id')) {
						activeFolder.performedTasksID[index]--;
					}
				});
				renderTasks();
				taskTag.remove();
				clearInterval(delButtonInterval);
			}
			isDownClickDelTaskButton ? delTaskButtonTimer += 4 : delTaskButtonTimer -= 4;
			if (delTaskButtonTimer < 0) {
				delTaskButtonTimer = 0;
				clearInterval(delButtonInterval);
			}
		},4);
	} else if (e.target.classList[0] === 'editTask') {
		isDownClickEditTaskButton = true;
		const editButtonInterval = setInterval(() => {
			if (editTaskButtonTimer > delOrEditTime) {
				editTaskButtonTimer = 0;
				//--------------
				tasksContainer.querySelectorAll('.right__task').forEach(task => {
					task.setAttribute('style', '');
				});
				//--------------
				taskTag.style.paddingLeft = '0';
				taskForm = document.querySelector('.right__task-form');
				if (taskForm) {
					taskForm.parentNode.innerHTML = editTask;
				}
				const inputValue = taskTag.querySelector('.right__task-text').innerHTML;
				addEditFormToTask(taskTag);
				setTimeout(() => taskTag.children[0].classList.add('right__task-form-active'), 10);
				taskInput = taskTag.children[0].querySelector('input');
				taskInput.value = inputValue;
				taskInput.focus();
				taskForm = document.querySelector('.right__task-form');
				taskInput.addEventListener('input', () => {
					if (taskInput.value.length > 110) {
						taskInput.value = taskInput.value.substring(0, taskInput.value.length - 1);
						taskForm.querySelector('.right__task-form-save').style.backgroundColor = '#DC143C';
						setTimeout(() => taskForm.querySelector('.right__task-form-save').style.backgroundColor = '#4DD599', 100);
					}
				});
				clearInterval(editButtonInterval);
			}
			isDownClickEditTaskButton ? editTaskButtonTimer += 4 : editTaskButtonTimer -= 4;
			if (editTaskButtonTimer < 0) {
				editTaskButtonTimer = 0;
				clearInterval(editButtonInterval);
			}
		},4);
	} else if (e.target.classList[0] === 'right__task-form-save') {
		activeFolder.tasks[e.target.parentNode.parentNode.getAttribute('id')] = e.target.parentNode.querySelector('input').value;
		renderTasks(activeFolder);
		taskInput.removeEventListener('input', () => {
			if (taskInput.value.length > 110) {
				taskInput.value = taskInput.value.substring(0, taskInput.value.length - 1);
				taskForm.querySelector('.right__task-form-save').style.backgroundColor = '#DC143C';
				setTimeout(() => taskForm.querySelector('.right__task-form-save').style.backgroundColor = '#4DD599', 100);
			}
		});
		e.target.parentNode.parentNode.setAttribute('style', '');
		e.target.parentNode.parentNode.innerHTML = editTask;
		
	} else if (e.target.classList[0] === 'right__task-form-cancel') {
		e.target.parentNode.classList.remove('right__task-form-active');
		e.target.parentNode.parentNode.setAttribute('style', '');
		setTimeout(() => e.target.parentNode.parentNode.innerHTML = editTask, delOrEditTime / 2);
		taskInput.removeEventListener('input', () => {
			if (taskInput.value.length > 110) {
				taskInput.value = taskInput.value.substring(0, taskInput.value.length - 1);
				taskForm.querySelector('.right__task-form-save').style.backgroundColor = '#DC143C';
				setTimeout(() => taskForm.querySelector('.right__task-form-save').style.backgroundColor = '#4DD599', 100);
			}
		});
	}

});
tasksContainer.addEventListener('mouseup', () => {
	isDownClickDelTaskButton = false;
	isDownClickEditTaskButton = false;
});

function addEditFormToTask(task) {
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

const createFolder = document.querySelector('.left__create'),
			createFolderForm = document.querySelector('.left__creating'),
			createFolderInput = createFolderForm.querySelector('input');

createTask.addEventListener('click', (e) => {
	const tClass = e.target.classList[0];
	if (tClass === 'right__create-button-overlay') {
		createTaskForm.classList.toggle('right__create-form-active');
		createTaskInput.focus();
	} else if (tClass === 'right__create-add') {
		if (createTaskInput.value.trim()) {
			createTaskInput.focus();
			createTaskForm.querySelector('.right__create-after').style.backgroundColor = '#4DD599';
			activeFolder.tasks.push(createTaskInput.value.trim());
			renderTasks(true);
			createTaskInput.value = '';
		}
	} else if (tClass === 'right__create-cancel') {
		createTaskForm.classList.remove('right__create-form-active');
		setTimeout(() => createTaskInput.value = '', 100);
	}
});
addEventListener('keydown', (e) => {
	if (e.keyCode === 13) {
		if (document.activeElement === createTaskInput && createTaskInput.value) {
			activeFolder.tasks.push(createTaskInput.value);
			renderTasks();
			createTaskInput.value = '';
		} else if (document.activeElement === createFolderInput && createFolderInput.value.trim()) {
			const newFolderName = `folder${Object.keys(tasks.folders).length}`;
			const foldersList = document.querySelectorAll('.left__folder');
			tasks.folders[newFolderName] = {};
			tasks.folders[newFolderName].name = createFolderInput.value;
			tasks.folders[newFolderName].id = Object.keys(tasks.folders).length - 1;
			tasks.folders[newFolderName].circleColor = color;
			tasks.folders[newFolderName].tasks = [];
			tasks.folders[newFolderName].performedTasksID = [];
			document.querySelector('.right__header-text').textContent = createFolderInput.value;
			foldersList.forEach(folder => {
				if (folder.classList.contains('left__folder-active')) {
					folder.classList.remove('left__folder-active');
				}
			});
			activeFolder = tasks.folders[newFolderName];
			renderTasks();
			renderFolders();
			createFolderInput.value = '';
		}
	} else if (e.keyCode === 27) {
		if (document.activeElement === createTaskInput) {
			createTaskForm.classList.remove('right__create-form-active');
		} else if (document.activeElement === createFolderInput) {
			createFolderForm.classList.remove('left__creating-active');
			setTimeout(() => createFolderInput.value = '', 100);
		}
	}
});

// Ограничение количества символов для формы добавления задачи
createTaskInput.addEventListener('input', () => {
	if (createTaskInput.value.length > 110) {
		createTaskInput.value = createTaskInput.value.substring(0, createTaskInput.value.length - 1);
		createTaskForm.querySelector('.right__create-after').style.backgroundColor = '#DC143C';
	} else {
		createTaskForm.querySelector('.right__create-after').style.backgroundColor = '#4DD599';
	}
});
// Ограничение количества символов для формы добавления папки
createFolderInput.addEventListener('input', () => {
	if (createFolderInput.value.length > 20) {
		createFolderInput.value = createFolderInput.value.substring(0, createFolderInput.value.length - 1);
		createFolderForm.querySelector('.left__creating-after').style.backgroundColor = '#DC143C';
	} else {
		createFolderForm.querySelector('.left__creating-after').style.backgroundColor = '#4DD599';
	}
});
//----------------------------------------
//----------------------------------------
//----------------------------------------
// Добавление папки

let color;
createFolder.addEventListener('click', (e) => {
	const tClass = e.target.classList[0];
	if (tClass === 'left__create-overlay') {
		createFolderForm.classList.toggle('left__creating-active');
		createFolderInput.focus();
	} else if (tClass === 'left__creating-close') {
		createFolderForm.classList.remove('left__creating-active');
		setTimeout(() => createFolderInput.value = '', 100);
	} else if (tClass === 'left__creating-button') {
		if (createFolderInput.value.trim()) {
			createFolderInput.focus();
			createFolderForm.querySelector('.left__creating-after').style.backgroundColor = '#4DD599';
			const newFolderName = `folder${Object.keys(tasks.folders).length}`;
			const foldersList = document.querySelectorAll('.left__folder');
			tasks.folders[newFolderName] = {};
			tasks.folders[newFolderName].name = createFolderInput.value;
			tasks.folders[newFolderName].id = Object.keys(tasks.folders).length - 1;
			if (createFolderForm.querySelector(':checked')) {
				tasks.folders[newFolderName].circleColor = color;
				createFolderForm.querySelector(':checked').checked = false;
			} else {
				tasks.folders[newFolderName].circleColor = arrayRandElement(folderFormColors);
			}
			tasks.folders[newFolderName].tasks = [];
			tasks.folders[newFolderName].performedTasksID = [];
			document.querySelector('.right__header-text').textContent = createFolderInput.value;
			foldersList.forEach(folder => {
				if (folder.classList.contains('left__folder-active')) {
					folder.classList.remove('left__folder-active');
				}
			});
			activeFolder = tasks.folders[newFolderName];
			renderTasks();
			renderFolders();
			createFolderInput.value = '';
		}
	} else if (tClass === 'left__creating-radio') {
		color = e.target.style.backgroundColor;
	}
});

// Изменение активной папки, удаление и редактирование папки 

let delFolderButtonTimer = 0,
		editFolderButtonTimer = 0,
		isDownClickDelFolderButton = true,
		isDownClickEditFolderButton = true,
		editFolder;

foldersContainer.addEventListener('click', (e) => {
	const tClass = e.target.classList[0];
	if (tClass === 'left__folder-overlay') {
		document.querySelector('.right__header-text').textContent = e.target.parentNode.querySelector('p').textContent;
		document.querySelector('.right__header-text').style.color = e.target.parentNode.querySelector('.left__folder-circle').style.backgroundColor;
		for (let folder of Object.keys(tasks.folders)) {
			if (e.target.parentNode.querySelector('p').textContent === tasks.folders[folder].name) {
				document.querySelectorAll('.left__folder').forEach(folder => folder.classList.remove('left__folder-active'));
				activeFolder = tasks.folders[folder];
			}
		}
		createFolderForm.classList.remove('left__creating-active');
		createTaskForm.classList.remove('right__create-form-active');
		e.target.parentNode.classList.add('left__folder-active');
		renderTasks();
	}
});

foldersContainer.addEventListener('mousedown', (e) => {
	const folderTag = e.target.parentNode.parentNode.parentNode.parentNode;
	let folderInput,
			folderForm;
	if (e.target.classList[0] === 'deleteFolder') {
		isDownClickDelFolderButton = true;
		const delButtonInterval = setInterval(() => {
			if (delFolderButtonTimer > delOrEditTime) {
				delFolderButtonTimer = 0;
				const slisedArrNum = Object.keys(tasks.folders).slice(+folderTag.getAttribute('id') + 1).map(folder => +folder[folder.length - 1]);
				slisedArrNum.forEach(folder => {
					tasks.folders[`folder${folder}`].id = folder - 1;
					tasks.folders[`folder${folder - 1}`] = JSON.parse(JSON.stringify(tasks.folders[`folder${folder}`]));
				});
				delete tasks.folders[`folder${Object.keys(tasks.folders).length - 1}`];
				if (folderTag.classList.contains('left__folder-active')) {
					foldersContainer.childNodes[0].classList.add('left__folder-active');
					activeFolder = tasks.folders.folder0;
				}
				folderTag.remove();
				renderFolders();
				renderTasks();
				clearInterval(delButtonInterval);
			}
			isDownClickDelFolderButton ? delFolderButtonTimer += 4 : delFolderButtonTimer -= 4;
			if (delFolderButtonTimer < 0) {
				delFolderButtonTimer = 0;
				clearInterval(delButtonInterval);
			}
		},4);
	} else if (e.target.classList[0] === 'editFolder') {
		isDownClickEditFolderButton = true;
		const editButtonInterval = setInterval(() => {
			if (editFolderButtonTimer > delOrEditTime) {
				//------------------------------
				document.querySelector('.right__header-text').textContent = folderTag.querySelector('p').textContent;
				for (let folder of Object.keys(tasks.folders)) {
					if (folderTag.querySelector('p').textContent === tasks.folders[folder].name) {
						document.querySelectorAll('.left__folder').forEach(folder => folder.classList.remove('left__folder-active'));
						activeFolder = tasks.folders[folder];
					}
				}
				createFolderForm.classList.remove('left__creating-active');
				createTaskForm.classList.remove('right__create-form-active');
				folderTag.classList.add('left__folder-active');
				renderTasks();
				//--------------------------------
				folderTag.style.paddingLeft = '0';
				editFolderButtonTimer = 0;
				folderForm = document.querySelector('.left__folder-form');
				if (folderForm) {
					folderForm.parentNode.innerHTML = editTask;
				}
				const inputValue = folderTag.querySelector('.left__folder-text').innerHTML;
				addEditFormToFolder(folderTag);
				setTimeout(() => folderTag.children[0].classList.add('left__folder-form-active'), 10);
				folderInput = folderTag.children[0].querySelector('input');
				folderInput.value = inputValue;
				folderInput.focus();
				folderForm = document.querySelector('.left__folder-form');
				folderInput.addEventListener('input', () => {
					if (folderInput.value.length > 20) {
						folderInput.value = folderInput.value.substring(0, folderInput.value.length - 1);
						folderForm.querySelector('.left__folder-form-save').style.backgroundColor = '#DC143C';
						setTimeout(() => folderForm.querySelector('.left__folder-form-save').style.backgroundColor = '#4DD599', 100);
					}
				});
				clearInterval(editButtonInterval);
			}
			isDownClickEditFolderButton ? editFolderButtonTimer += 4 : editFolderButtonTimer -= 4;
			if (editFolderButtonTimer < 0) {
				editFolderButtonTimer = 0;
				clearInterval(editButtonInterval);
			}
		},4);
	} else if (e.target.classList[0] === 'left__folder-form-save') {
		activeFolder.name = e.target.parentNode.querySelector('input').value;
		document.querySelector('.right__header-text').textContent = activeFolder.name;
		renderFolders();
		e.target.parentNode.parentNode.setAttribute('style', '');
		e.target.parentNode.parentNode.innerHTML = editFolder;
	} else if (e.target.classList[0] === 'left__folder-form-cancel') {
		e.target.parentNode.classList.remove('left__folder-form-active');
		e.target.parentNode.parentNode.setAttribute('style', '');
		setTimeout(() => e.target.parentNode.parentNode.innerHTML = editFolder, delOrEditTime / 2);
	}
});

foldersContainer.addEventListener('mouseup', () => {
	isDownClickDelFolderButton = false;
	isDownClickEditFolderButton = false;
});

function addEditFormToFolder(folder) {
	let editForm = `
	<div class="left__folder-form">
		<input class="left__folder-form-input" type="text">
		<button class="left__folder-form-save primary-button" id="editFolderSave">&#10004;</button>
		<button class="left__folder-form-cancel secondary-button" id="editFolderCancel">&#10008;</button>
	</div>
	`;
	editFolder = folder.innerHTML;
	folder.innerHTML = editForm;
}

// Отображение всех папок
 const showAllFolders = document.querySelector('.left__header');

 showAllFolders.addEventListener('click', (e) => {
	console.log('Фича пока не работает! :)');
 });


});
