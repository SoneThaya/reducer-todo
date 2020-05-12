
export const TodoReducer = (state, action) => {
 console.log(state)
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        item: action.payload,
        id: Date.now(),
        completed: false,
      }
      return {
        ...state,
        newTodo
      }
    case "TOGGLE_COMPLETE":
      const newTodos = state.todoData.map(item => {
        if (item.id === action.payload) {
          item.completed = !item.completed
          return item
        } return item
      })
      return {
        ...state,
        newTodos
      };
    case "CLEAR_COMPLETED":
      const uncompletedTodos = state.todoData.filter(todo => todo.completed === false)
      return {
        ...state,
        todoData: uncompletedTodos
      }
    default:
      return state
  }
}

export const initialState = {
  todoData: 
    [
      {
        item: 'Learn about reducers',
        completed: true,
        id: 3892987589
        },
        {
          item: 'Doing redux todo list',
          completed: false,
          id: 3892987590
        },
    ]
  
}
  
