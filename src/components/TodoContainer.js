import TodoList from "./TodoList";

const TodoContainer = ({todos, addTodo, saveTodo, editTodo}) => {
  return (
    <div id="todo-container" className="card">
      <div className="card-header">
        <h2 className="card-title">TODO</h2>
        <div className="card-btns">
          <span onClick={addTodo} className="material-symbols-outlined">
            add
          </span>
          {/* <span className="material-symbols-outlined">
            keep
          </span> */}
          <span className="material-symbols-outlined">
            more_horiz
          </span>
        </div>
      </div>
      <div className="card-body todo-card-body">
        <ul id="todos">
          <TodoList todos={todos} saveTodo={saveTodo} editTodo={editTodo}/>
        </ul>
      </div>
    </div>
  )
}

export default TodoContainer;
