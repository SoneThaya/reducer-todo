import React, { useReducer } from 'react';
import { TodoReducer, initialState } from '../reducers/reducer'

const Todo = (props) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState)
  console.log(state)
  
  return (
    <div>
      <p
        style={{textDecoration: props.completed ? "line-through" : "none"}}
        onClick={() => props.toggleCompleted(props.item.id)}
        key={props.id}
      >
        {props.todoData}
      </p>
      
    </div>
  )
}

export default Todo;