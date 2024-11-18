
// localStorage.setItem("car","bmw");
// console.log(localStorage.getItem("car"));

// localStorage.clear();

// sessionStorage.setItem("car","mercedes");


window.onload = function() {
    loadTasks();
};


document.getElementById("addTaskButton").onclick = function() {
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();

    if (task) {
        addTask(task);
        taskInput.value = "";
    }
};


function addTask(task) {
   
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));


    loadTasks();
}


function loadTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; 

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function(task, index) {
      
        const li = document.createElement("li");
        li.textContent = task;

        
        const removeButton = document.createElement("button");
        removeButton.textContent = "Delete";
        removeButton.onclick = function() {
            removeTask(index);
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);
    });
}


function removeTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1); 

    
    localStorage.setItem("tasks", JSON.stringify(tasks));


    loadTasks();
}