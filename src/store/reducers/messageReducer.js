const initialState = {
  items: [],
  item: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MESSAGES":
      return { ...state, items: action.payload };
    case "CREATE_MESSAGE":
      return { ...state, items: [...state.items, action.payload] };
    case "DELETE_MESSAGE":
      return {
        items: [...state.items].filter(message => {
          return message.id !== action.payload.id;
        })
      };
    case "UPDATE_MESSAGE":
      return { ...state, items: [...state.items, action.payload] };

    case "PREPARE_MESSAGE_TO_UPDATE":
      return { ...state, item: { ...action.payload } };
    default:
      return state;
  }
};
