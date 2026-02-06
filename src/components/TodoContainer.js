import TodoList from "./TodoList";

const TodoContainer = ({showInputForm, todos, addTodo, saveTodo}) => {
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
        {/* showInputForm이 true면 아래가 보이고... false면 안 보이게 */}
        <TodoList todos={todos} saveTodo={saveTodo} />
      </div>
    </div>
  )
}

export default TodoContainer;
