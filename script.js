window.addEventListener("load", () => {
  console.log("todo`s ready for edit");
});

import checkComplete from "./components/completeTask.js";
import deleteTask from "./components/deleteTask.js";

const btn = document.querySelector("[data-form-btn]");

const createTask = (e) => {
  e.preventDefault();
  const input = document.querySelector("[data-form-input]");
  const value = input.value;
  const list = document.querySelector("[data-list]");
  const task = document.createElement("li");
  task.classList.add("card");
  input.value = "";

  const taskContent = document.createElement("div");

  const titleTask = document.createElement("span");
  titleTask.classList.add("task");
  titleTask.innerText = value;

  taskContent.appendChild(checkComplete());
  taskContent.appendChild(titleTask);
  task.appendChild(taskContent);
  task.appendChild(deleteTask());
  list.appendChild(task);
};

btn.addEventListener("click", createTask);
