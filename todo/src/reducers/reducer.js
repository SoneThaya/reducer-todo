
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
        todoData: [
          ...state.todoData,
          newTodo
        ]
        
      }
    case "TOGGLE_COMPLETE":
      const comp = state.todoData.map(item => {
        
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item
        }
      })
      return {
        ...state,
        todoData: [
          ...state.todoData,
          comp
        ]
      }
    case "CLEAR_COMPLETED":
      const uncompletedTodos = state.todoData.filter(todo => todo.completed === false)
      return {
        ...state,
        todoData: [
          ...state.todoData,
          uncompletedTodos
        ]
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
  
