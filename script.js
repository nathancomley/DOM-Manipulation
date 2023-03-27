
let addTaskButton = document.getElementById("add-task");
let newTaskInput = document.getElementById("task-input");
let todoListContainer = document.getElementById("todo-list");

var showActiveButton = document.getElementById("show-active");

let templateElement = document.getElementById("list-item-template");

let template = templateElement.innerHTML;

function onAddTaskClicked(event) {
    
    let taskName = newTaskInput.value;
    
    newTaskInput.value = "";

    
    let taskHTML = template.replace("<!-- TASK_NAME -->", taskName);

    
    todoListContainer.insertAdjacentHTML('beforeend', taskHTML);
}

function onTodolistClicked(event) {
    
    let targetElement = event.target;


    while (!targetElement.classList.contains("task")) {
        targetElement = targetElement.parentElement;
    }

   
    let checkbox = targetElement.querySelector(".checkbox");


    
    if (checkbox.checked) {
        targetElement.classList.add("completed");
    } else {
        targetElement.classList.remove("completed");
    }
}


addTaskButton.addEventListener('click', onAddTaskClicked);
todoListContainer.addEventListener('click', onTodolistClicked);

function showActiveTask() {
    var tasks = document.getElementsByClassName('task')
    for (let i = 0; i > tasks.length; i++){
        if (task[i].classList.contains("completed")){
            //get the element you want to hide//
            task[i].style.display = "none";
        }else {
            tasks[i].style.display = "block";
        }
    }
}
