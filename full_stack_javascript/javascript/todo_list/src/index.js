import "./css/styles.css";

// Helper function to save projects to localStorage
function saveProjects() {
  localStorage.setItem("projects", JSON.stringify(projects));
}

// Helper function to load projects from localStorage
function loadProjects() {
  const data = localStorage.getItem("projects");
  return data ? JSON.parse(data) : [];
}

// Project and Todo class definitions
class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description || "";
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }
}

class Project {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }
}

// Global variables
let projects = loadProjects();
let currentProject = projects.length > 0 ? projects[0] : new Project("Default");
let editingTodoIndex = null;

// DOM Elements
const projectList = document.getElementById("project-list");
const projectSelect = document.getElementById("projectSelect");
const currentProjectTitle = document.getElementById("current-project");
const todoList = document.getElementById("todo-list");
const newProjectForm = document.getElementById("new-project-form");
const newTodoForm = document.getElementById("new-todo-form");
const modal = document.getElementById("todo-details");
const closeModalBtn = document.getElementById("close-modal");
const editTodoTitle = document.getElementById("edit-todo-title");
const editTodoDescription = document.getElementById("edit-todo-description");
const editTodoDueDate = document.getElementById("edit-todo-due-date");
const editTodoPriority = document.getElementById("edit-todo-priority");
const saveEditBtn = document.getElementById("save-edit-btn");
const deleteTodoBtn = document.getElementById("delete-todo-btn");

// Render functions
function renderProjects() {
  projectList.innerHTML = "";
  projects.forEach((project, index) => {
    const li = document.createElement("li");
    li.textContent = project.title;
    li.className = `project-item ${project === currentProject ? "active" : ""}`;
    li.dataset.projectIndex = index;
    li.addEventListener("click", () => selectProject(index));
    projectList.appendChild(li);
  });
  currentProjectTitle.textContent = `${currentProject.title} Project`;
}

function renderTodos() {
  todoList.innerHTML = "";
  if (currentProject.todos.length === 0) {
    todoList.innerHTML = "<p>No todos yet. Add some!</p>";
  } else {
    currentProject.todos.forEach((todo, index) => {
      const li = document.createElement("li");
      li.className = `todo-item ${todo.priority}`;
      li.innerHTML = `
        <div>
          <strong>${todo.title}</strong> - ${new Date(
        todo.dueDate
      ).toLocaleDateString()}
        </div>
        <button class="edit-btn">Edit</button>
      `;
      li.querySelector(".edit-btn").addEventListener("click", () =>
        showEditModal(index)
      );
      todoList.appendChild(li);
    });
  }
}

// Event handlers
newProjectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("new-project-input").value.trim();
  if (title) {
    const newProject = new Project(title);
    projects.push(newProject);
    saveProjects();
    renderProjects();
    document.getElementById("new-project-input").value = "";
  }
});

newTodoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("new-todo-title").value.trim();
  const dueDate = document.getElementById("new-todo-due-date").value;
  const priority = document.getElementById("new-todo-priority").value;
  if (title && dueDate) {
    const newTodo = new Todo(title, "", dueDate, priority);
    currentProject.addTodo(newTodo);
    saveProjects();
    renderTodos();
    document.getElementById("new-todo-title").value = "";
    document.getElementById("new-todo-due-date").value = "";
    document.getElementById("new-todo-priority").value = "medium";
  }
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

saveEditBtn.addEventListener("click", () => {
  if (editingTodoIndex !== null) {
    const editedTodo = currentProject.todos[editingTodoIndex];
    editedTodo.title = editTodoTitle.value;
    editedTodo.description = editTodoDescription.value;
    editedTodo.dueDate = editTodoDueDate.value;
    editedTodo.priority = editTodoPriority.value;
    saveProjects();
    renderTodos();
    modal.classList.add("hidden");
  }
});

deleteTodoBtn.addEventListener("click", () => {
  if (editingTodoIndex !== null) {
    currentProject.todos.splice(editingTodoIndex, 1);
    saveProjects();
    renderTodos();
    modal.classList.add("hidden");
  }
});

function showEditModal(index) {
  editingTodoIndex = index;
  const todo = currentProject.todos[index];
  editTodoTitle.value = todo.title;
  editTodoDescription.value = todo.description;
  editTodoDueDate.value = todo.dueDate;
  editTodoPriority.value = todo.priority;
  modal.classList.remove("hidden");
}

function selectProject(index) {
  currentProject = projects[index];
  renderProjects();
  renderTodos();
}

// Initial rendering
renderProjects();
renderTodos();
