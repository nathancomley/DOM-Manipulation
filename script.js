var addTaskButton = document.getElementById("add-task");
var newTaskInput = document.getElementById("add-input");
var tpdoListContainer = document.getElementById("todo-list");


function onAddTaskClicked(event) {
    var taskName = newTaskInput.value;
    newTaskInput.value = "";
    todoListContainer.insertAdjustmentHTML('afterbegin',taskName);
}


addTaskButton.addEventListener('click' onAddTaskClicked)
