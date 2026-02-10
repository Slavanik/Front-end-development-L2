interface taskInterface { // Creates interface
    myTasks: string[]; // Creates the array
    addTasks(task: string): Number;
}

class Tasks implements taskInterface {
    constructor() { } // Leaving constructor empty as it is not needed

    myTasks: string[] = []; // Ensures the array is empty

    addTasks(task: string): number { // Should add a task to the array
        this.myTasks.push(task); // Places the task into the list of tasks
        console.log(task + " has been added to the task list"); // User confirmation
        return this.myTasks.length; // Returns back the length of the array
    }

    listAllTasks(): void { // For Showing all contents of task
        for (let i = 0; i < this.myTasks.length; i++) { // loops through until reaches the length of array
            console.log("Task " + (i + 1) + ": " + this.myTasks[i]); // Prints each of the contents
        }
    }

    deleteTask(task: string): void { // For deleting certain arrays
        let index: number = this.myTasks.indexOf(task); // Finds where a specific task is

        if (index === -1) { // Fail safe
            console.log(task + " don't exist in the array");
        } else {
            this.myTasks.splice(index, 1); // takes the location of the array and removes it
            console.log("Sucessfully deleted " + task); // User confirmation
        }
    }
}

let todo = new Tasks(); // Creates the class
todo.addTasks("Work"); // Should add task 'work'
todo.listAllTasks(); // Should show just work
todo.addTasks("Exercise"); // Should add task 'exercise'
todo.listAllTasks(); // Should show Both
todo.deleteTask("Work"); // // Should remove task 'work'
todo.listAllTasks(); // Should show just exercise
todo.deleteTask("Eating"); // Should not remove anything