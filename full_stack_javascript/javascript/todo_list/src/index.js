import projects from "./js/projects.js";

const projectForm = document.getElementById("projectForm");
const projectTitleInput = document.getElementById("projectTitleInput");
const projectSelect = document.getElementById("projectSelect");
const taskFormContainer = document.getElementById("taskFormContainer");
const taskForm = document.getElementById("taskForm");
const taskTitleInput = document.getElementById("taskTitleInput");
const taskDescriptionInput = document.getElementById("taskDescriptionInput");

const taskPrioritySelect = document.getElementById("taskPrioritySelect");

projectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = projectTitleInput.value.trim();
  if (title) {
    projects.push({ title, tasks: [] });
    updateProjectSelect();
    projectTitleInput.value = "";
  }
});

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (currentProject && taskTitleInput.value.trim()) {
    const task = {
      title: taskTitleInput.value,
      description: taskDescriptionInput.value,
      dueDate: new Date(),
      priority: taskPrioritySelect.value,
      completed: false,
    };
    const project = projects.find((p) => p.title === currentProject);
    if (project) {
      project.tasks.push(task);
      updateTaskList();
      resetTaskForm();
    }
  }
});

projectSelect.addEventListener("change", (e) => {
  currentProject = e.target.value;
  taskFormContainer.classList.toggle("hidden", !currentProject);
  updateTaskList();
});

window.toggleTask = (projectIndex, taskIndex) => {
  projects[projectIndex].tasks[taskIndex].completed =
    !projects[projectIndex].tasks[taskIndex].completed;
  updateTaskList();
};

window.removeTask = (projectIndex, taskIndex) => {
  projects[projectIndex].tasks.splice(taskIndex, 1);
  updateTaskList();
};
