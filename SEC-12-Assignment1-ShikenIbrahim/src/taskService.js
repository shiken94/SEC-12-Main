const { loadTasks, saveTasks } = require("./taskRepository");

const ALLOWED_PRIORITIES = ["low", "medium", "high"];

function normalizePriority(priority) {
	const p = String(priority || "medium").toLowerCase();
	if (!ALLOWED_PRIORITIES.includes(p)) {
		throw new Error('Invalid priority. Use: "low", "medium", "high".');
	}
	return p;
}

function getNextId(tasks) {
	// TODO: return next id number (1,2,3...) based on existing tasks
	// Hint: find max id then +1

	// validation added to always return 1 if no task found
	if (!Array.isArray(tasks) || tasks.length === 0) {
		return 1;
	}

	const maxId = tasks.reduce((max, task) => {
		return task.id > max ? task.id : max;
	}, 0);

	return maxId + 1;
}


async function addTask(title, priority) {
	// TODO:

	// 1) load tasks
	const tasks = await loadTasks();

	// Added additional checking for my debug to ensure json always return an Array instead of promise array or an objects
	if (!Array.isArray(tasks)) {
		console.log("Tasks is not an array.");
		return;
	}

	// 2) create new task object
	const newTask = {
		// Task shape:
		// { id, title, completed, priority, createdAt }
		id: getNextId(tasks),
		title,
		completed: false,
		priority,
		createdAt: new Date().toISOString(),
	};

	//add new task to tasks
	tasks.push(newTask);

	// 3) save updated tasks
	await saveTasks(tasks);

	// 4) return the created task
	// Unable to return task by id, due to no param id, hence return task by title
	return tasks.find(t => t.title === title);
}

/**
 * filter = { status: "all"|"completed"|"pending", priority: "low"|"medium"|"high"|null }
 */
async function listTasks(filter) {
	// TODO:
	// 1) load tasks
	const tasks = await loadTasks();

	// 2) apply filtering if needed
	// 3) return filtered list sorted by id
	return tasks
		.filter(task => {
			// Status filter
			if (filter.status === "completed" && !task.completed) return false;
			if (filter.status === "pending"   && task.completed) return false;

			// Priority filter
			return !(filter.priority && task.priority !== filter.priority);
		});
}

async function markDone(id) {
	// TODO:
	// 1) load tasks
	const tasks = await loadTasks();

	// 2) find task by id
	const task = tasks.find((t) => t.id === id);

    // 3) update completed=true (use map, do not mutate original object)
	task.completed = true;

	// 4) save
	await saveTasks(tasks);

	// 5) return updated task
	return tasks.find(t => t.id === id);
}

async function deleteTask(id) {
	// TODO:

	// 1) load tasks
	const tasks = await loadTasks();

	// 2) find task by id (so you can return it)
	// 3) filter it out
	const newTasks = tasks.filter((task) => task.id !== id);

	// 4) save
	await saveTasks(newTasks);

	// 5) return removed task
	return tasks.find(t => t.id === id);
}

module.exports = { addTask, listTasks, markDone, deleteTask };
