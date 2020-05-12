import React from 'react';
import './Todo.css'

const Todo = props => {
  const { state, dispatch } = props;

  const onClick = e => {
    dispatch({type: "ADD_TODO"})
  }
  
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