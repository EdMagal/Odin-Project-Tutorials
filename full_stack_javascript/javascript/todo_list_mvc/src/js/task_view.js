import task from "./task.js";
import show from "./task_controller.js";

const taskView = (function () {
  const displayTaskIndex = () => {
    if (task.taskList === undefined) {
      const tasks = task.taskList;
      console.log(tasks);
      let taskIndex = "<ol>";
      for (let i = 0; i < tasks.length; i++) {
        taskIndex += `<li><button onclick=${show(tasks[i])}>${
          tasks[i].title
        }</button></li>`;
      }
      taskIndex += "</ol>";
      return taskIndex;
    } else {
      console.log("No tasks found");
    }
  };

  return { displayTaskIndex };
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

export default taskView;
