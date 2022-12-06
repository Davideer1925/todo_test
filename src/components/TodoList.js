import { TodoItem } from './TodoItem'

export const TodoList = ({ todoList, delTodo }) => {
  return (
    <>
      <ul>
        {todoList.map(({ content, isComplete }, index) => (
          <TodoItem
            key={`${content}-${index}`}
            content={content}
            isComplete={isComplete}
            delTodo={delTodo}
            index={index}
          />
        ))}
      </ul>
    </>
  )
}
