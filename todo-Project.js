const todoForm = document.querySelector(".form-todo");
const formInput = document.querySelector(".form-todo input[type='text']");
const toDoList = document.querySelector(".addATodo");



todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newTodoText = formInput.value;
  formInput.value = "";
  const newLi = document.createElement("li");
  const newLiInnerHtml = `<span class="text">${newTodoText}</span>
    <div class="todo-button">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>`;
  newLi.innerHTML = newLiInnerHtml;
  toDoList.append(newLi);
});



toDoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("done")) {
    const spanLi = e.target.parentNode.previousElementSibling;
    spanLi.style.textDecoration = spanLi.style.textDecoration === "line-through" ? "none" : "line-through";

  }
  if (e.target.classList.contains("remove")) {
    const removeElement = e.target.parentNode.parentNode;
    removeElement.remove();
  }
});


