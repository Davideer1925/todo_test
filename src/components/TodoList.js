import { TodoItem } from './TodoItem'

export const TodoList = ({ todoList, delTodo, modTodo }) => {
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
            modTodo={modTodo}
          />
        ))}
      </ul>
    </>
  )
}
