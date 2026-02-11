import TodoItem from "./TodoItem";
const TodoList = ({todos, saveTodo, editTodo}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} saveTodo={saveTodo} editTodo={editTodo}/>
      ))}
    </ul>
  )
}

export default TodoList;
