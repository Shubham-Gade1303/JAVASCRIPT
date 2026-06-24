let tasks = [];

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {

    let task = taskInput.value.trim();

    if(task === ""){
        alert("Please enter task");
        return;
    }

    tasks.push(task);

    displayTasks();

    taskInput.value = "";
}

function displayTasks() {

    taskList.innerHTML = "";

    tasks.forEach(function(task,index){

        let li = document.createElement("li");

        li.innerHTML = `
            ${task}
            <button class="deleteBtn" onclick="deleteTask(${index})">
                Delete
            </button>
        `;

        taskList.appendChild(li);
    });
}

function deleteTask(index){

    tasks.splice(index,1);

    displayTasks();
}