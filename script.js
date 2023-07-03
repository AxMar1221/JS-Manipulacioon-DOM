window.addEventListener("load", () => {
  console.log("todo`s ready for edit");
});

(() => {
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
    task.appendChild(deleteTaskIcon());
    list.appendChild(task);

  };

  btn.addEventListener("click", createTask);

  const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", deleteTask);

    return i;
  };

  const completeTask = (event) => {
    const ele = event.target;
    ele.classList.toggle("fas");
    ele.classList.toggle("completeIcon");
    ele.classList.toggle("far");
  };

  const deleteTaskIcon = () => {
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", deleteTask)
    return i;
  };

  const deleteTask = (event) => {
    const parent = event.target.parentElement;
    parent.remove();
  }
})();
