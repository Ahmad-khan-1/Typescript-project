import "./style.css";

/* Todo type */
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

/* DOM elements */
const input = document.getElementById("todo-text") as HTMLInputElement;
const addBtn = document.getElementById("add-btn") as HTMLButtonElement;
const todoList = document.getElementById("todo-list") as HTMLUListElement;
const filter = document.getElementById("filter") as HTMLSelectElement;
const darkBtn = document.getElementById("dark-btn") as HTMLButtonElement;

/* State */
let todos: Todo[] = loadTodos();

/* Add todo */
function addTodo(text: string) {
  const newTodo: Todo = {
    id: Date.now(),
    text,
    completed: false,
  };

  todos.push(newTodo);
  saveTodos();
  renderTodos();
}

/* Delete todo */
function deleteTodo(id: number) {
  todos = todos.filter((todo) => todo.id !== id);
  saveTodos();
  renderTodos();
}

/* Toggle complete */
function toggleTodo(id: number) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo,
  );

  saveTodos();
  renderTodos();
}

/* Edit todo */
function editTodo(id: number) {
  const todo = todos.find((t) => t.id === id);
  if (!todo) return;

  const newText = prompt("Edit todo:", todo.text);

  if (newText) {
    todo.text = newText;
    saveTodos();
    renderTodos();
  }
}

/* Render UI */
function renderTodos() {
  todoList.innerHTML = "";

  let filtered = todos;

  if (filter.value === "completed") {
    filtered = todos.filter((t) => t.completed);
  } else if (filter.value === "pending") {
    filtered = todos.filter((t) => !t.completed);
  }

  filtered.forEach((todo) => {
    const li = document.createElement("li");

    const textSpan = document.createElement("span");
    textSpan.className = "todo-text";
    textSpan.textContent = todo.text;

    if (todo.completed) {
      textSpan.style.textDecoration = "line-through";
      textSpan.style.opacity = "0.6";
    }

    const actions = document.createElement("div");
    actions.className = "todo-actions";

    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.onclick = () => toggleTodo(todo.id);

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => editTodo(todo.id);

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => deleteTodo(todo.id);

    actions.append(doneBtn, editBtn, delBtn);

    li.append(textSpan, actions);
    todoList.appendChild(li);
  });
}

/* Save */
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

/* Load */
function loadTodos(): Todo[] {
  const data = localStorage.getItem("todos");
  return data ? JSON.parse(data) : [];
}

/* Events */
addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;

  addTodo(text);
  input.value = "";
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addBtn.click();
});

filter.addEventListener("change", renderTodos);

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

/* Init */
renderTodos();
