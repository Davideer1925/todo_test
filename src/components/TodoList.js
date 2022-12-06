import { TodoItem } from './TodoItem'

export const TodoList = ({ todoList }) => {
  return (
    <>
      <ul>
        {todoList.map(({ content }, index) => (
          <TodoItem key={`${content}-${index}`} content={content} />
        ))}
      </ul>
    </>
  )
}
