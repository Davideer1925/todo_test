import { useState } from 'react'
import { TodoHeader } from './components/TodoHeader'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'

function App() {
  const [todoList, setTodoList] = useState([])
  function delTodo(index) {
    const newTodoList = [...todoList]
    newTodoList.splice(index, 1)
    setTodoList(newTodoList)
  }
  console.log(todoList)
  return (
    <div>
      <TodoHeader headerContent={'Todo List'} />
      <TodoInput setTodoList={setTodoList} />
      <TodoList todoList={todoList} delTodo={delTodo} />
    </div>
  )
}

export default App
