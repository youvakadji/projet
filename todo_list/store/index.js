var local = JSON.parse(localStorage.getItem('tasks'))

export const state = () => ({
	tasks: local
})

export const mutations = {
	ADD_TASK(state, task) {
		state.tasks = [{ content: task, done: false }, ...state.tasks];
		var parsed = JSON.stringify(state.tasks);
		localStorage.setItem('tasks', parsed);
	},

	REMOVE_TASK(state, task) {
		state.tasks.splice(state.tasks.indexOf(task), 1);
	},

	TOGGLE_TASK(state, task) {
		task.done = !task.done;
	}
}
