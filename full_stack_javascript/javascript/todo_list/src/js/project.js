import task from "./task.js";

const project = (function proj() {
  const projectsList = [];
  let id = 1;

  const create = (name) => {
    if (!name) throw new Error("Project name is required");

    const newProject = {
      id: id++,
      name: name,
      tasks: [],
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

  const addTask = () => {};

  return { create, list, find };
})();

export default project;
