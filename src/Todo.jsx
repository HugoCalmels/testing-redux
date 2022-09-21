// from this tuto : https://www.youtube.com/watch?v=ML5egqL3YFE&t=183s

const Todo = ({ todo }) => {
  const { id, title, completed } = todo
  
  const h1 = <h1>{title}</h1>;

  const text = completed ? <strike>{h1}</strike> : h1
  
  return (
    <div data-testid={`todo-${id}`}>{text}</div>
  )
}


export default Todo