export const TodoItem = ({ content, isComplete, index, delTodo, modTodo }) => {
  return (
    <>
      <li>
        <input
          type={'checkbox'}
          checked={isComplete}
          onChange={() => modTodo(index)}
        />
        <span style={{ textDecoration: isComplete ? 'line-through' : 'none' }}>
          {content}
        </span>
        {isComplete && <button onClick={() => delTodo(index)}>DEL</button>}
      </li>
    </>
  )
}
