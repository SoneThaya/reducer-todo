import React, { useReducer, useState } from 'react';
import { TodoReducer, initialState } from '../reducers/reducer'


export const TodoList = () => {
  const [state, dispatch] = useReducer(TodoReducer, initialState)
  console.log(state)
  const [newTodo, setNewTodo] = useState('')
  

  const handleChanges = e => {
    setNewTodo(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
    dispatch({
      type: 'ADD_TODO',
      payload: newTodo
    })
  }

  const toggleComplete = e => {
    e.preventDefault()
    dispatch({
      type: 'TOGGLE_COMPLETE',
      payload: e.target.id
    })
  }

  const clearTodo = e => {
    e.preventDefault()
    dispatch({
      type: "CLEAR_COMPLETED",
      payload: e.target.id
    })
  }

  console.log(newTodo)

    return (
    <div>
      
      <form >
      <input
        type="text"
        name="newTodo"
        value={newTodo}
        placeholder="Enter new task"
        onChange={handleChanges}
          />
          
      <button
      onClick={onSubmit}
      className="add-btn"
    >
            Add Todo</button>
          
            <button
            onClick={clearTodo}
            className="add-btn"
          >
            Clear Todo</button>
    
    </form>
     
      
      {state.todoData.map(item => (
        <div >
          <p
          key={item.id}
          style={{ textDecoration: item.completed ? "line-through" : "none" }}
          onClick={toggleComplete}
          >{item.item}</p>
         
        
        </div>
      ))}
       
    </div>
  )
  
}

export default TodoList