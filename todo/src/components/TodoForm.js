import React, {useState, useReducer} from 'react'
import { TodoReducer, initialState } from '../reducers/reducer'

export default function TodoForm() {
  const [newTodo, setNewTodo] = useState('')
  const [state, dispatch] = useReducer(TodoReducer, initialState)

  const handleChanges = e => {
    setNewTodo(e.target.value)
  }

  return (
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
          dispatch({ type: 'ADD_TODO', payload: newTodo })
        }}
        className="add-btn"
      >
        Add Todo</button>
        
      </form>
  )
}
