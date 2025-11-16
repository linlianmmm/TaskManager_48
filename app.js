function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        ${taskText}
        <span class="delete-btn" onclick="deleteTask(this)">X</span>
    `;

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}

function deleteTask(element) {
    element.parentElement.remove();
}
