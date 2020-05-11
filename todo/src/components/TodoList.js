import React, { useReducer } from 'react';
import { TodoReducer, initialState } from '../reducers/reducer'

const TodoList = () => {
  const [state, dispatch] = useReducer(TodoReducer, initialState)
  console.log(state)
  return (
    <div>
      <h2>hello from todo list</h2>
      
        <div>
        <p
          style={{ textDecoration: state.completed ? "line-through" : "none" }}
          onClick={() =>
            dispatch({type: 'TOGGLE_COMPLETE', payload: !state.completed})}
          key={state.id}>{state.item}</p>
          <p>Id: {state.id}</p>
          <p>Completed: {state.completed}</p>
        </div>
       
      

      
    </div>
   

  )
}

export default TodoList;