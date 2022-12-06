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
  function modTodo(index) {
    const newTodoList1 = [...todoList]
    newTodoList1[index].isComplete = !newTodoList1[index].isComplete
    setTodoList(newTodoList1)
  }
  console.log(todoList)
  return (
    <div>
      <TodoHeader headerContent={'Todo List'} />
      <TodoInput setTodoList={setTodoList} />
      <TodoList todoList={todoList} delTodo={delTodo} modTodo={modTodo} />
    </div>
  )
}

export default App
