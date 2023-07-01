window.addEventListener("load", () => {
  console.log("todo`s ready for edit");
});

const btn = document.querySelector("[data-form-btn]");

console.log(btn);

btn.addEventListener('click', (e) => {
    e.preventDefault(btn)
    console.log('create TODO')
})

