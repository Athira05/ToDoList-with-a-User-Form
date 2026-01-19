// 1. Get input box, add button and task list
let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");

// 2. When user clicks Add Task button
addTaskBtn.addEventListener("click", function () {

    // 3. Get text from input box
    let taskText = taskInput.value;

    // 4. Check if input is empty
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // 5. Create a list item <li>
    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";

    // 6. Create span to store task text
    let taskSpan = document.createElement("span");
    taskSpan.innerText = taskText;

    // 7. Create div to store buttons
    let buttonDiv = document.createElement("div");

    // COMPLETE BUTTON
    let completeBtn = document.createElement("button");
    completeBtn.innerText = "Complete";
    completeBtn.className = "btn btn-success btn-sm me-1";

    completeBtn.addEventListener("click", function () {
        taskSpan.classList.toggle("completed");
    });

    // EDIT BUTTON
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.className = "btn btn-warning btn-sm me-1";

    editBtn.addEventListener("click", function () {
        let updatedTask = prompt("Edit your task", taskSpan.innerText);
        if (updatedTask !== "" && updatedTask !== null) {
            taskSpan.innerText = updatedTask;
        }
    });

    //  DELETE BUTTON
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "btn btn-danger btn-sm";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    // 8. Add buttons to button div
    buttonDiv.appendChild(completeBtn);
    buttonDiv.appendChild(editBtn);
    buttonDiv.appendChild(deleteBtn);

    // 9. Add text and buttons to list item
    li.appendChild(taskSpan);
    li.appendChild(buttonDiv);

    // 10. Add list item to task list
    taskList.appendChild(li);

    // 11. Clear input box
    taskInput.value = "";
});
