import taskView from "./task_view.js";

export default function displayProjectIndex(projects) {
  let projectIndex = "<ol>";
  for (let i = 0; i < projects.length; i++) {
    projectIndex += `<li><button onclick=${taskView.displayTaskIndex(
      projects[i]
    )}>${projects[i].name}</button></li>`;
  }
  projectIndex += "</ol>";
  return projectIndex;
}
