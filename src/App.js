import { useState } from 'react';
import './assets/styles/index.css';
// fullCalendar
import TodoContainer from './components/TodoContainer';

{/* <title>MOODSTACK</title> */}

function App() {
  const [todos, setTodos] = useState([]);
  const [showInputForm, setShowInputForm] = useState(false);
  let todoId = 0;

  // 투두 추가버튼 클릭
  const addTodo = () => {
    if (document.querySelector(".add-todo-div")) return;

    // 작업중이 아닌 투두 비활성화
    //closeAllEdits();

    // 투두 추가 div 보이기
    setShowInputForm(!showInputForm);

    // const addDivInput = document.querySelector("#todo-title");
    // addDivInput.focus();
    // todoCardBody.scrollTop = todoCardBody.scrollHeight;
  }

  // 투두 저장버튼 클릭
  const saveTodo = (value) => {
    setTodos(prev => [...prev, {id: todoId, text: value}]);
    todoId++;
  }

  // 작업중이 아닌 투두 비활성화
  function closeAllEdits() {
    alert("작업중이 아닌 투두 비활성화");
  }

  return (
    <div id="moodstack-app">
      <header>
        <h1 className="h1">MOODSTACK</h1>
      </header>
      <TodoContainer todos={todos} showInputForm={showInputForm} addTodo={addTodo} saveTodo={saveTodo} />
    </div>
  );
}

export default App;
