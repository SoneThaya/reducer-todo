import React, { useReducer, useState } from 'react';
import { TodoReducer, initialState } from '../reducers/reducer'


export const TodoList = () => {
  const [state, dispatch] = useReducer(TodoReducer, initialState)
  console.log(state)
  const [newTodo, setNewTodo] = useState('')
  

  const handleChanges = e => {
    setNewTodo(e.target.value)
  }

  console.log(newTodo)

    return (
    <div>
      
      <form>
      <input
        type="text"
        name="newTodo"
        value={newTodo}
        placeholder="Enter new task"
        onChange={handleChanges}
          />
          
      <button
      onClick={() => {
              dispatch({
                type: 'ADD_TODO',
                payload: newTodo
              })
      }}
      className="add-btn"
    >
      Add Todo</button>
    
    </form>
      <h2>hello from todo list</h2>
        <p>{state.item} hello</p>
      {state.todoData.map(item => (
        <div key={item.id}>
        <p
          style={{ textDecoration: item.completed ? "line-through" : "none" }}
          onClick={() =>
            dispatch({type: 'TOGGLE_COMPLETE', payload: !item.completed})}
          >{item.item}</p>
          <p>Id: {item.id}</p>
          <p>Completed: {item.completed}</p>
        </div>
      ))}
       
    </div>
  )
  
}

export default TodoList