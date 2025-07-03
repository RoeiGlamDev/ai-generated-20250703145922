// Get the todo list element
const todoList = document.getElementById('todo-list');

// Get the add todo form element
const addTodoForm = document.getElementById('add-todo-form');

// Get the todo input element
const todoInput = document.getElementById('todo-input');

// Get the add todo button element
const addTodoBtn = document.getElementById('add-todo-btn');

// Initialize an empty array to store todo items
let todoItems = [];

// Function to render the todo list
function renderTodoList() {
  // Clear the todo list element
  todoList.innerHTML = '';

  // Loop through the todo items array
  todoItems.forEach((item, index) => {
    // Create a new list item element
    const listItem = document.createElement('li');

    // Add the todo item text to the list item element
    listItem.textContent = item.text;

    // Add a class to the list item element if it's completed
    if (item.completed) {
      listItem.classList.add('completed');
    }

    // Add a delete button to the list item element
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => {
      // Remove the todo item from the array
      todoItems.splice(index, 1);

      // Render the todo list again
      renderTodoList();
    };

    // Add the delete button to the list item element
    listItem.appendChild(deleteBtn);

    // Add an event listener to the list item element to toggle completion
    listItem.addEventListener('click', () => {
      // Toggle the completed property of the todo item
      item.completed = !item.completed;

      // Render the todo list again
      renderTodoList();
    });

    // Add the list item element to the todo list element
    todoList.appendChild(listItem);

    // Add a fade-in animation to the list item element
    listItem.classList.add('fade-in');
  });
}

// Add an event listener to the add todo form element to submit the form
addTodoForm.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the todo item text from the input element
  const todoItemText = todoInput.value.trim();

  // Check if the todo item text is not empty
  if (todoItemText) {
    // Create a new todo item object
    const todoItem = {
      text: todoItemText,
      completed: false,
    };

    // Add the todo item to the array
    todoItems.push(todoItem);

    // Render the todo list again
    renderTodoList();

    // Clear the input element
    todoInput.value = '';
  }
});

// Render the todo list initially
renderTodoList();