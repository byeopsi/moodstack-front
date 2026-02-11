import {useState} from 'react';
const TodoItem = ({ todo, saveTodo, editTodo }) => {
  const [value, setValue] = useState(todo.content);

  const onSave = () => {
    if (!value.trim()) return;
    saveTodo(todo.id, value);
  };

  return (
    <>
    {todo.isEditing ? (
      // 추가 / 수정 상태
        <li className="todo">
          <input type="checkbox" disabled />
          <input
            id="todo-title"
            value={value}
            onChange={e => setValue(e.target.value)}
            autoFocus
          />
          <div className="add-todo-btns">
            <span onClick={onSave} className="material-symbols-outlined">
              check
            </span>
            <span className="material-symbols-outlined">
              close
            </span>
          </div>
        </li>
      ) : (
        // 확정 상태
          <li className="todo">
            <input className="done-todo" type="checkbox" />
            <span className="todo-title">{todo.content}</span>
            <div>
              <span
                onClick={() => editTodo(todo.id)}
                className="edit-todo ml-auto material-symbols-outlined"
              >
                edit
              </span>
              <span className="delete-todo ml-auto material-symbols-outlined">
                close
              </span>
            </div>
          </li>
      )}
      </>
  );
};

export default TodoItem;
