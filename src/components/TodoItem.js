import { useState } from "react";
const TodoItem = ({saveTodo}) => {
  const [value, setValue] = useState('');
  const onChange = (e) => {
    setValue(e.target.value);
  }
  const onClick = () => {
    saveTodo(value);
    setValue('');
  }
  return (
    <li className="todo">
      <input type="checkbox"/>
      <input id="todo-title" onChange={onChange} value={value}/>
      <div className="add-todo-btns">
        <span onClick={onClick} className="material-symbols-outlined">
          check
        </span>
        <span onClick="closeAddTodo()" className="material-symbols-outlined">
          close
        </span>
      </div>
    </li>
  )
}

export default TodoItem;
