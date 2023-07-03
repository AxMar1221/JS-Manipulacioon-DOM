const checkComplete = () => {
  const i = document.createElement("i");
  i.classList.add("far", "fa-check-square", "icon");
  i.addEventListener("click", completeTask);

  return i;
};

const completeTask = (event) => {
  const ele = event.target;
  ele.classList.toggle("fas");
  ele.classList.toggle("completeIcon");
  ele.classList.toggle("far");
};

export default checkComplete
