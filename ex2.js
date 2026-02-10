var Tasks = /** @class */ (function () {
    function Tasks() {
        this.myTasks = []; // Ensures the array is empty
    } // Leaving constructor empty as it is not needed
    Tasks.prototype.addTasks = function (task) {
        this.myTasks.push(task); // Places the task into the list of tasks
        console.log(task + " has been added to the task list"); // User confirmation
        return this.myTasks.length; // Returns back the length of the array
    };
    Tasks.prototype.listAllTasks = function () {
        for (var i = 0; i < this.myTasks.length; i++) { // loops through until reaches the length of array
            console.log("Task " + (i + 1) + ": " + this.myTasks[i]); // Prints each of the contents
        }
    };
    Tasks.prototype.deleteTask = function (task) {
        var index = this.myTasks.indexOf(task); // Finds where a specific task is
        if (index === -1) { // Fail safe
            console.log(task + " don't exist in the array");
        }
        else {
            this.myTasks.splice(index, 1); // takes the location of the array and removes it
            console.log("Sucessfully deleted " + task); // User confirmation
        }
    };
    return Tasks;
}());
var todo = new Tasks(); // Creates the class
todo.addTasks("Work"); // Should add task 'work'
todo.listAllTasks(); // Should show just work
todo.addTasks("Exercise"); // Should add task 'exercise'
todo.listAllTasks(); // Should show Both
todo.deleteTask("Work"); // // Should remove task 'work'
todo.listAllTasks(); // Should show just exercise
todo.deleteTask("Eating"); // Should not remove anything
