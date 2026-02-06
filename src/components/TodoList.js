import TodoItem from "./TodoItem";
const TodoList = ({todos, saveTodo}) => {
  return (
    <ul id="todos">
      {todos.map((todo) => (
        <TodoItem todo={todo} saveTodo={saveTodo} />
      ))}
    </ul>
  )
}

export default TodoList;
