document.addEventListener('DOMContentLoaded', () => {

const tasksContainer = document.querySelector('.right__tasks');

tasksContainer.addEventListener('mousedown', (e) => {
	if (e.target.parentNode.classList[1] === 'delete') {
		const timer = 0;
		// e.target.parentNode.parentNode.parentNode.parentNode.remove();
		console.log('1');
	}
});

});