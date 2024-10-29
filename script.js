const taskContent = document.querySelector(".input-field");
const addTask = document.querySelector(".add-button");
const taskList = document.querySelector(".task-list");
const done = document.querySelector(".all-done");

const handleAddTask = () => {
  const taskValue = taskContent.value.trim();
  if (taskValue) {
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";
    taskItem.textContent = taskValue;

    // Create a delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "✖";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", () => {
      taskList.removeChild(taskItem);
    });

    // Add event listener for toggling completed state
    taskItem.addEventListener("click", () => {
      taskItem.classList.toggle("completed");
    });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
    taskContent.value = ""; // Clear input field
  } else {
    alert("Please enter the task!");
  }
};

// Check if all tasks are completed
const checkAllCompleted = () => {
  const tasks = document.querySelectorAll(".task-item");
  return Array.from(tasks).every((task) =>
    task.classList.contains("completed")
  );
};

addTask.addEventListener("click", handleAddTask);

// Handle Enter key press for adding task
taskContent.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleAddTask();
  }
});

// Handle the "All Done" button click
done.addEventListener("click", () => {
  if (checkAllCompleted()) {
    alert("Congratulations!!!");
    taskList.innerHTML = "";
  } else {
    alert("Complete all tasks before clicking 'All Done'!");
  }
});
