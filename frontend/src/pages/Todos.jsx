import { useEffect, useState } from "react";
import {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
} from "../api";
import "../styles/todos.css";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    const data = await getTodos();
    setTodos(data);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    const todo = await createTodo({ title: newTodo });
    setTodos([todo, ...todos]);
    setNewTodo("");
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter((t) => t._id !== id));
  };

  const handleToggle = async (todo) => {
    const updated = await updateTodo(todo._id, {
      completed: !todo.completed,
      title: todo.title,
    });

    setTodos(todos.map((t) => (t._id === todo._id ? updated : t)));
  };

  const startEdit = (todo) => {
    setEditingId(todo._id);
    setEditText(todo.title);
  };

  const saveEdit = async (id) => {
    const updated = await updateTodo(id, {
      title: editText,
    });

    setTodos(todos.map((t) => (t._id === id ? updated : t)));
    setEditingId(null);
    setEditText("");
  };

  return (
    <div className="todo-page">
      <div className="todo-card">
        <h2 className="todo-title">My Todo List</h2>

        <form className="todo-form" onSubmit={handleAdd}>
          <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="What do you need to do?"
          />
          <button>Add</button>
        </form>

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
                  onChange={() => handleToggle(todo)}
                />

                {editingId === todo._id ? (
                  <input
                    className="edit-input"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onBlur={() => saveEdit(todo._id)}
                    onKeyDown={(e) =>
                      e.key === "Enter" && saveEdit(todo._id)
                    }
                    autoFocus
                  />
                ) : (
                  <span className="todo-text">{todo.title}</span>
                )}
              </div>

              <div className="todo-actions">
                <button onClick={() => startEdit(todo)}>✏️</button>
                <button onClick={() => handleDelete(todo._id)}>🗑️</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
