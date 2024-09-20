import task from "./task.js";

const project = (function () {
  const projectsList = [];
  let id = 1;

  const create = (name) => {
    if (!name) throw new Error("Project name is required");

    const newProject = {
      id: id++,
      name: name,
    };
    projectsList.push(newProject);
    return newProject;
  };

  const list = () => {
    return projectsList;
  };

  const find = (id) => {
    return projectsList.find((someProject) => someProject.id === id);
  };

  const destroy = (id) => {
    const projectToRemove = find(id);
    if (projectToRemove) {
      projectsList.splice(projectsList.indexOf(projectToRemove), 1);
    }
  };

  return { create, list, find, destroy };
})();

export default project;
