const task = (function newTask() {
  let id = 1;
  let taskList = [];

  const create = ({
    projectId,
    title,
    description,
    dueData,
    priority,
    done,
  }) => {
    const newTask = {
      id: id++,
      projectId: projectId,
      title: title,
      description: description,
      dueData: dueData,
      priority: priority,
      done: done,
      switchState: function () {
        this.done = !this.done;
      },
    };
    taskList.push(newTask);
    return newTask;
  };

  const find = (taskId) => {
    return taskList.find((task) => task.id === taskId);
  };

  const update = (taskId, { title, description, dueData, priority, done }) => {
    const task = find(taskId);
    if (task) {
      task.title = title || task.title;
      task.description = description || task.description;
      task.dueData = dueData || task.dueData;
      task.priority = priority || task.priority;
      task.done = done || task.done;
    }
  };

  // taskes a boolean function to remove all tasks that meet the condition. Ex. task.destroy((task) => task.id === 2)
  const destroy = (criteriaFunc) => {
    taskList = taskList.filter((task) => !criteriaFunc(task));
  };

  return { id, all, create, find, update, destroy };
})();

const t = task.create({
  projectId: 1,
  title: "clean house",
  description: "clean the floor, windows, take the trash out.",
  duaDate: "12/09/2024",
  priority: "medium",
  done: false,
});

const t1 = task.create({
  projectId: 1,
  title: "clean bathroom floor",
  description: "swipe and wipe the floor",
  duaDate: "13/09/2024",
  priority: "low",
  done: false,
});

const t2 = task.create({
  projectId: 1,
  title: "clean house",
  description: "clean the floor, windows, take the trash out.",
  duaDate: "12/09/2024",
  priority: "medium",
  done: false,
});

const t3 = task.create({
  projectId: 2,
  title: "astats",
  description: "asdasdaggg a sdsa qw eqwewqe lmf",
  duaDate: "14/09/2024",
  priority: "high",
  done: false,
});

console.log(task.all());
