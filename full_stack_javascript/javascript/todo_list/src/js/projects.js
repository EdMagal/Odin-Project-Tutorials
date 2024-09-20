const project = (function () {
  const taskList = document.getElementById("taskList");
  const noProjectsMessage = document.getElementById("noProjectsMessage");

  let projects = [];
  let currentProject = null;

  function updateProjectSelect() {
    projectSelect.innerHTML = '<option value="">Select a project</option>';
    projects.forEach((project) => {
      const option = document.createElement("option");
      option.value = project.title;
      option.textContent = project.title;
      projectSelect.appendChild(option);
    });
    noProjectsMessage.classList.toggle("hidden", projects.length > 0);
  }

  function updateTaskList() {
    taskList.innerHTML = "";
    const project = projects.find((p) => p.title === currentProject);
    if (project) {
      project.tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = "task-list-item";
        if (task.completed) li.classList.add("completed");
        li.innerHTML = `
            <input type="checkbox" ${
              task.completed ? "checked" : ""
            } onclick="toggleTask(${projects.indexOf(project)}, ${index})">
            <div class="task-content">
              <h3 class="task-title">${task.title}</h3>
              <p class="task-description">${task.description}</p>
              <div class="task-meta">
                <span>Due: ${task.dueDate.toLocaleDateString()}</span>
                <span class="priority-${task.priority.toLowerCase()}">${
          task.priority
        }</span>
                <button onclick="removeTask(${projects.indexOf(
                  project
                )}, ${index})" class="button">X</button>
              </div>
            </div>
          `;
        taskList.appendChild(li);
      });
    }
  }

  function resetTaskForm() {
    taskTitleInput.value = "";
    taskDescriptionInput.value = "";
    taskPrioritySelect.value = "Medium";
  }

  return {
    projects,
    currentProject,
    updateTaskList,
    updateTaskList,
    resetTaskForm,
  };
})();

export default project;
