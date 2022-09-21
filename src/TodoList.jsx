// from this tuto : https://www.youtube.com/watch?v=ML5egqL3YFE&t=183s
import Todo from "./Todo"
const TodoList = ({ todo }) => {
  const todos = [
    { id: 1, title: "wash dishes", completed: false },
    {id: 2, title: "make dinner", completed: true},
  ]
  return (
    <div className="todolist">
      {todos.map((todo) => (
        <Todo todo={todo}/>
      ))}
    </div>
  )
}


export default TodoList