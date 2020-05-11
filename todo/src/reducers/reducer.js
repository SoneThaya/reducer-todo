

export const TodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        item: action.payload,
        completed: false,
        id: new Date(),
      };
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
  item: 'Learn about reducers',
  completed: true,
  id: 3892987589
}