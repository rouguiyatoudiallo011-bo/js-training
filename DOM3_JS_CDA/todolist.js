
const form = document.querySelector("#todo-form");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  let input = document.querySelector("#task-input");
   
  let value = input.value; 

  const li = document.createElement("li");

  li.textContent = value;

  const list = document.querySelector("#task-list");

  list.appendChild(li);

});