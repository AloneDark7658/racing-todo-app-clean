import { useEffect, useState } from "react";
import {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
  toggleTodo,
} from "../api";
import "../styles/todos.css";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const loadTodos = async () => {
    const data = await getTodos();
    setTodos(data);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    await createTodo(newTodo);
    setNewTodo("");
    loadTodos();
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    loadTodos();
  };

  const handleUpdate = async (id) => {
    if (!editingText.trim()) return;

    await updateTodo(id, editingText);
    setEditingId(null);
    setEditingText("");
    loadTodos();
  };

  const handleToggle = async (id, completed) => {
    await toggleTodo(id, completed);
    loadTodos();
  };

  return (
    <div className="todo-page">
      <div className="todo-card">
        <h2 className="todo-title">My Todo List</h2>

        {/* ADD TODO */}
        <form className="todo-form" onSubmit={handleAdd}>
          <input
            placeholder="What do you need to do?"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>

        {/* TODO LIST */}
        <ul>
          {todos.map((todo) => (
            <li
              key={todo._id}
              className={`todo-item ${
                todo.completed ? "todo-completed" : ""
              }`}
            >
              <div className="todo-left">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() =>
                    handleToggle(todo._id, !todo.completed)
                  }
                />
                <span className="todo-text">{todo.title}</span>
              </div>

              <div>
                <button
                  onClick={() => {
                    setEditingId(todo._id);
                    setEditingText(todo.title);
                  }}
                >
                  ✏️
                </button>
                <button onClick={() => handleDelete(todo._id)}>
                  🗑
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
