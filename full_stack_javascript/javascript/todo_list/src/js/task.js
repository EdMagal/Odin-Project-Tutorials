const task = (function newTask() {
  let id = 1;

  const create = (projectId, title, description, dueData, priority, done) => {
    return {
      id: id++,
      projectId: projectId,
      title: title,
      description: description,
      dueData: dueData,
      priority: priority,
      done: done,
    };
  };

  const update = (task, parameters) => {
    for (const key in parameters) {
      task[key] = parameters[key];
    }
  };

  const switchState = (givenTask) => {
    givenTask.done = !givenTask.done;
  };

  return { id, switchState, create, update };
})();

const t = task.create(
  1,
  "clean house",
  "clean the floor, windows, take the trash out.",
  "12/09/2024",
  "medium",
  false
);

task.update(t, {
  title: "study math",
  description: "practice pages 10 to 15",
  done: false,
});

export default task;
