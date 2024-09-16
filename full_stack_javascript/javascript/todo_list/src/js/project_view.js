export default function displayProjectIndex(projects) {
  let projectIndex = "<ol>";
  for (let i = 0; i < projects.length; i++) {
    projectIndex += `<li><button>${projects[i].name}</button></li>`;
  }
  projectIndex += "</ol>";
  return projectIndex;
}
