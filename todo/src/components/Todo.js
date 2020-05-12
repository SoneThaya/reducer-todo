import React, { useReducer } from 'react';
import { TodoReducer, initialState } from '../reducers/reducer'

const Todo = (props) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState)
  console.log(state)
  
  return (
    <div>
      <p
        style={{ textDecoration: state.completed ? "line-through" : "none" }}
        onClick={() =>
          dispatch({type: 'TOGGLE_COMPLETE', payload: !state.completed})}
        key={state.id}>
        {state.item}
      </p>
      <p>{state.id}</p>
      
    </div>
  )
}

export default Todo;