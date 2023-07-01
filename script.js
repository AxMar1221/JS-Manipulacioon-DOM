window.addEventListener("load", () => {
  console.log("todo`s ready for edit");
});

const btn = document.querySelector("[data-form-btn]");

const createTask = (e) => {
  e.preventDefault();
  const input = document.querySelector("[data-form-input]");
  const value = input.value;
  input.value = "";
  console.log(value);
};

console.log(btn);

btn.addEventListener("click", createTask);
