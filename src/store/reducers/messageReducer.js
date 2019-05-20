const initialState = {
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MESSAGES":
      return {
        items: action.payload
      };
    case "CREATE_MESSAGE":
      return {
        items: [...state.items, action.payload]
      };
    case "DELETE_MESSAGE":
      return {
        items: [...state.items].filter(message => {
          return message.id !== action.payload.id;
        })
      };
    case "UPDATE_MESSAGE":
      return {
        items: [...state.items, action.payload]
      };
    default:
      return state;
  }
};
