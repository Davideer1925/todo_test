import { useState } from 'react'
import { TodoHeader } from './components/TodoHeader'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'

function App() {
  const [todoList, setTodoList] = useState([])
  return (
    <div>
      <TodoHeader headerContent={'Todo List'} />
      <TodoInput setTodoList={setTodoList} />
      <TodoList todoList={todoList} />
    </div>
  )
}

export default App
