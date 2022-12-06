export const TodoItem = ({ content, isComplete, index, delTodo }) => {
  return (
    <>
      <li>
        <span>{content}</span>
        <button onClick={() => delTodo(index)}>DEL</button>
      </li>
    </>
  )
}
