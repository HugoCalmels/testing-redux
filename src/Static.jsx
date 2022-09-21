import { useState } from "react"

const Static = () => {

  const [count, setCount] = useState(0)
  const [newItemText, setNewItemText] = useState('')
  const [itemsList, setItemsList] = useState([])


  const incrementCounter = () => {
    setCount(count+1)
  }

  const decrementCounter = () => {
    setCount(count-1)
  }

  const handleAddItem = (e) => {
    e.preventDefault()  

    console.log(newItemText)
    setItemsList([...itemsList, {text: newItemText, id: itemsList.length}])

    setNewItemText('')
  }

  const handleRemoveItem = (id) => {
    const newItemsList = itemsList.filter(item => item.id !== id)
    setItemsList(newItemsList)
  }



  const listItemComponents = (itemsList.map(item => {
    return (
      <>
        <li>{item.text}<button data-testid={`remove-item${item.id}`} onClick={()=>handleRemoveItem(item.id)}>Remove</button></li>
      </>
    )
  }))

  
  return (
    <>
      <h1>STATIC</h1>
      <button onClick={incrementCounter}>increment</button>
      <button disabled={count <= 0} onClick={decrementCounter}>decrement</button>

      <h1>counter : <span data-testid="counter-value">{count}</span></h1>

      <hr />
      
      <form onSubmit={(e)=>handleAddItem(e)}>
      <label htmlFor="newItem">Create List Item
        <input 
          id="newItem"
            type="text"
            value={newItemText}
            onChange={(e)=>setNewItemText(e.target.value)}
          ></input>
        </label>
        <input type="submit"value="Add Item" data-testid="add-item"></input>
      </form>
      
      <hr />
      <ul>
        {listItemComponents}
     </ul>
    </>

  )
}

export default Static