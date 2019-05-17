const initialState = {
  items: [],
  item: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MESSAGES":
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
};
