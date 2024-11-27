// Initialize an empty array to hold tasks
let tasks = [];

// Function to add a new task
function addTask(description, priority) {
    // Generate a unique ID for each task
    const id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;

    // Create a new task object
    const newTask = {
        id: id,
        description: description,
        priority: priority
    };

    // Add the new task to the tasks array
    tasks.push(newTask);
    console.log(`Task with ID ${id} added.`);
}

// Function to display all tasks
function displayTasks() {
    if (tasks.length === 0) {
        console.log("No tasks available.");
        return;
    }

    console.log("All Tasks:");
    tasks.forEach(task => {
        console.log(`ID: ${task.id}, Description: ${task.description}, Priority: ${task.priority}`);
    });
}

// Function to delete a task by ID
function deleteTaskById(id) {
    const index = tasks.findIndex(task => task.id === id);

    if (index === -1) {
        console.log(`Task with ID ${id} not found.`);
        return;
    }

    tasks.splice(index, 1);
    console.log(`Task with ID ${id} deleted.`);
}

// Function to display all tasks by priority
function displayTasksByPriority(priority) {
    const filteredTasks = tasks.filter(task => task.priority.toLowerCase() === priority.toLowerCase());

    if (filteredTasks.length === 0) {
        console.log(`No tasks with priority "${priority}" found.`);
        return;
    }

    console.log(`Tasks with priority "${priority}":`);
    filteredTasks.forEach(task => {
        console.log(`ID: ${task.id}, Description: ${task.description}, Priority: ${task.priority}`);
    });
}

// User Interaction with Dialog Boxes
function userInteraction() {
    let continueLoop = true;

    while (continueLoop) {
        const action = prompt("What would you like to do? (1: Add Task, 2: Display All Tasks, 3: Delete Task, 4: Display Tasks by Priority, 5: Exit)");

        switch (action) {
            case "1":
                const description = prompt("Enter task description:");
                const priority = prompt("Enter task priority (high, medium, low):");
                addTask(description, priority);
                break;
            case "2":
                displayTasks();
                break;
            case "3":
                const deleteId = parseInt(prompt("Enter task ID to delete:"));
                deleteTaskById(deleteId);
                break;
            case "4":
                const priorityToDisplay = prompt("Enter priority to display tasks (high, medium, low):");
                displayTasksByPriority(priorityToDisplay);
                break;
            case "5":
                continueLoop = false;
                break;
            default:
                console.log("Invalid action. Please try again.");
        }
    }
}

// Start user interaction
userInteraction();
