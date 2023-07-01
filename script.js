window.addEventListener("load", () => {
  console.log("todo`s ready for edit");
});

const btn = document.querySelector("[data-form-btn]");

console.log(btn);

btn.addEventListener('click', (e) => {
    e.preventDefault(btn)
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
})

