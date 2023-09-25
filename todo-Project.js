// Get references to the necessary DOM elements
const todoForm = document.querySelector(".form-todo");
const formInput = document.querySelector(".form-todo input[type='text']");
const toDoList = document.querySelector(".addATodo");

// Handle form submission
todoForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page
  const newTodoText = formInput.value; // Get the text from the input field
  formInput.value = ""; // Clear the input field
  const newLi = document.createElement("li"); // Create a new list item
  const newLiInnerHtml = `<span class="text">${newTodoText}</span>
    <div class="todo-button">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
        <button class="todo-btn edit">Edit</button> 

    </div>`;
  newLi.innerHTML = newLiInnerHtml; // Set the inner HTML of the new list item
  toDoList.append(newLi); // Add the new list item to the list
});

// Handle clicks on the to-do list
toDoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("done")) { // If the clicked element has the class "done"
    const spanLi = e.target.parentNode.previousElementSibling; // Find the previous sibling (the <span>)
    spanLi.style.textDecoration = spanLi.style.textDecoration === "line-through" ? "none" : "line-through"; // Toggle text decoration
  }
  if (e.target.classList.contains("remove")) { // If the clicked element has the class "remove"
    const removeElement = e.target.parentNode.parentNode; // Find the parent <li> to remove
    removeElement.remove(); // Remove the list item
  }
});

// Edit button functionality
document.addEventListener("DOMContentLoaded", function () {
  const editButtons = document.querySelectorAll(".edit");

  // Handle Edit button clicks
  editButtons.forEach(function (editButton) {
    editButton.addEventListener("click", function (e) {
      const listItem = e.target.closest("li"); // Find the closest parent <li> element
      const textElement = listItem.querySelector(".text"); // Find the text element

      // Prompt the user for a new text for the list item
      const newText = prompt("Edit your todo:", textElement.textContent);

      if (newText !== null) {
        textElement.textContent = newText; // Update the text
      }
    });
  });
});
