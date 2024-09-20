import tasks from "./task.js";
import updateTaskList from "./task_view.js";

const addTaskDialog = document.getElementById("add-task-dialog");
const taskTitle = document.getElementById("task-title");
const taskDate = document.getElementById("task-date");
const taskPriority = document.getElementById("task-priority");
const taskDone = document.getElementById("task-done");
const newTaskBtn = document.getElementById("new-task-btn");
const taskDialogCloseBtn = document.getElementById("task-dialog-close-btn");

function show(task) {
  console.log(task);
}

newTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();
});

// openTaskDialogButton.addEventListener("click", () => {
//     newTaskdialog.showModal();
// });

// closeTaskDialogButton.addEventListener("click", (event) => {
// event.preventDefault();
// projectName.value = "";
// newProjectdialog.close();
// });

// function displayTasks() {
//   const projectListHTML = updateTaskList(projects.list());
//   viewProjectList.innerHTML = projectListHTML;
// }

export default show;
