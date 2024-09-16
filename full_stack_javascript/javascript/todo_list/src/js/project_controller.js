import projects from "./project.js";
import updateProjectList from "./project_view.js";

const openDialogButton = document.getElementById("project-dialog-open-btn");
const newProjectButton = document.getElementById("new-project-btn");
const closeDialogButton = document.getElementById("project-dialog-close-btn");
const newProjectdialog = document.getElementById("add-project-dialog");
const projectName = document.getElementById("project-name");
const viewProjectList = document.getElementById("projects-list");

// Open dialog with the add-project form
openDialogButton.addEventListener("click", () => {
  newProjectdialog.showModal();
});

// Close/cancel dialog with the add-project form
closeDialogButton.addEventListener("click", (event) => {
  event.preventDefault();
  projectName.value = "";
  newProjectdialog.close();
});

newProjectButton.addEventListener("click", (event) => {
  event.preventDefault();
  projects.create(projectName.value); // gets the name of the project from the text field
  displayProjects(); // lists all projects
  projectName.value = ""; // clears the text field after adding the project
  newProjectdialog.close();
});

function displayProjects() {
  const projectListHTML = updateProjectList(projects.list());
  viewProjectList.innerHTML = projectListHTML;
}
