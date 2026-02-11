import { useEffect, useState } from 'react';
import './assets/css/main.css';
import './assets/css/index.css';
import './assets/css/tailwind.css';
// fullCalendar
import TodoContainer from './components/TodoContainer';

{/* <title>MOODSTACK</title> */}

function App() {
  const [todos, setTodos] = useState([]);

  // 투두 추가버튼 클릭
  const addTodo = () => {
    //if (document.querySelector(".add-todo-div")) return;

    // 작업중이 아닌 투두 비활성화
    //closeAllEdits();

    setTodos(prev => [...prev,
      {id: Date.now(), content: '', isEditing: true, done: false}
    ]);

    // const addDivInput = document.querySelector("#todo-title");
    // addDivInput.focus();
    // todoCardBody.scrollTop = todoCardBody.scrollHeight;
  }

  // 투두 저장버튼 클릭
  const saveTodo = (id, value) => {
    setTodos(prev => prev.map(
      (todo) => todo.id === id
        ? {...todo, content: value, isEditing: false}
        : todo
    )
  )};

  // 투두 수정중
  const editTodo = (id) => {
    setTodos(prev =>
      prev.map((todo) => todo.id === id
        ? {...todo, isEditing: true }
        : todo
      )
    );
  }

  function closeAllEdits() {
    // 작업중이 아닌 투두 비활성화
    alert("작업중이 아닌 투두 비활성화");
  }

  return (
    <div id="moodstack-app">
      <header>
        <h1 className="h1">MOODSTACK</h1>
      </header>
      <TodoContainer todos={todos} addTodo={addTodo} saveTodo={saveTodo} editTodo={editTodo} />
    </div>
  );
}

export default App;
