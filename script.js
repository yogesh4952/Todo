const taskContent = document.querySelector(".input-field");
const addTask = document.querySelector(".add-button");
const taskList = document.querySelector(".task-list");
const done = document.querySelector(".all-done");
console.log(done);

const handleAddTask = () => {
  const taskValue = taskContent.value.trim();
  console.log(taskValue);
  if (taskValue) {
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";
    taskItem.textContent = taskValue;

    taskItem.addEventListener("click", () => {
      taskItem.classList.toggle("completed");
    });
    taskList.appendChild(taskItem);

    taskContent.value = "";
  } else {
    alert("Please enter the task!@");
  }
};

const checkAllCompleted = () => {
  const tasks = document.querySelectorAll(".task-item");
  return Array.from(tasks).every((task) =>
    task.classList.contains("completed")
  );
};

addTask.addEventListener("click", handleAddTask);

taskContent.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleAddTask();
  }
});

done.addEventListener("click", () => {
  if (checkAllCompleted()) {
    alert("Randi ko xoro muji khate ko ban machikne!");
  } else {
    alert("Complete all tasks before clicking 'All Done'!");
  }
});
