// const fs = require("fs");
const fs = require("fs/promises");
const path = require("path");

const filePath = path.join(__dirname, "..", "data.json");

async function loadTasks() {
	// TODO:

	try {
		const raw = await fs.readFile(filePath, "utf8"); // Read file
		const parsed = JSON.parse(raw); // parse JSON
		return Array.isArray(parsed) ? parsed : []; // always return an array
	} catch {
		// if file not found or invalid -> return []
		await fs.writeFile(filePath, "[]");
		return [];
	}
}

async function saveTasks(tasks) {
	// TODO:
	// write tasks to file as JSON
	await fs.writeFile(filePath, JSON.stringify(tasks, null, 2));
}

module.exports = { loadTasks, saveTasks };
