const initialState = {
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MESSAGES":
      return {
        items: action.payload
      };
    case "CREATE_MESSAGES":
      return {
        items: [...state.items, action.payload]
      };
    case "DELETE_MESSAGES":
      return {
        items: [...state.items].filter(
          message => message.id !== action.payload.id
        )
      };
    case "UPDATE_MESSAGES":
      return {
        items: [...state.items, action.payload]
      };
    default:
      return state;
  }
};
