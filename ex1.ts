let myArray:Array<string>=[]; // Declared array to store tasks

function addTask(task:string) { // Function to add tasks
    myArray.push(task); // Places the task into the list of tasks
    console.log(task + " has been added to the task list"); // User confirmation
    return myArray.length; // Returns back the length of the array
}

function listAllTasks():void { // Function to print all tasks in array
    for (let i = 0; i < myArray.length; i++) { // loops through until reaches the length of array
        console.log("Task " + (i+1) + ": " + myArray[i]); // Prints each of the contents
    }
}

function deleteTask(task:string) { // Function to delete a task
    let index:number = myArray.indexOf(task); // Finds where a specific task is

    if(index === -1) { // Fail safe
        console.log(task + " don't exist in the array");
    } else {
        myArray.splice(index, 1); // takes the location of the array and removes it
        console.log("Sucessfully deleted " + task); // User confirmation
    }
    
}

addTask("Work") // Should add task 'work'
listAllTasks() // Should show just work
addTask("Exercise") // Should add task 'exercise'
listAllTasks() // Should show both work and exercise
deleteTask("Work") // Should remove task 'work'
listAllTasks() // Should just show exercise
deleteTask("Dinner") // Should not remove task because doesn't exist in array
