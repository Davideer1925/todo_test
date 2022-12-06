import { useState } from 'react'

export const TodoInput = ({ setTodoList }) => {
  const [textContent, setTextContent] = useState('')
  function addTodo() {
    if (!textContent.trim()) {
      setTextContent('')
      return
    }
    setTodoList((arr) => [...arr, { content: textContent, isComplete: false }])
    setTextContent('')
  }
  return (
    <>
      <input
        type={'text'}
        value={textContent}
        onChange={(e) => setTextContent(e.target.value)}
      />
      <button onClick={addTodo}>ADD</button>
    </>
  )
}
