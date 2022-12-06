export const TodoItem = ({ content, isComplete, index, delTodo, modTodo }) => {
  return (
    <>
      <li>
        <span
          onDoubleClick={() => modTodo(index)}
          style={{ textDecoration: isComplete ? 'line-through' : 'none' }}
        >
          {content}
        </span>
        <button onClick={() => delTodo(index)}>DEL</button>
      </li>
    </>
  )
}
