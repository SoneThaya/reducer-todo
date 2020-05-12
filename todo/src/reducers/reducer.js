

export const TodoReducer = (state = [initialState], action) => {
  switch (action.type) {
    case "ADD_TODO":
      
      const newItem = {
        item: state.item,
        completed: false,
        id: new Date().getUTCMilliseconds()
      }
      
      return {
        ...state,
        todoItems: {

          item: action.payload,
          completed: false,
          id: new Date().getUTCMilliseconds(),
        }
    }
    case "TOGGLE_COMPLETE":
      return {
        ...state,
        completed: !state.completed,
      };
    default:
      return state
  }
}

export const initialState = {
  todoItems: [
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
]}
