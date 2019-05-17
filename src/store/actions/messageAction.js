import Axios from "axios";
export const fetchMessages = () => dispatch => {
  Axios.get("http://5cdeb8c36f4437001467aad7.mockapi.io/api/messages").then(
    res =>
      dispatch({
        type: "FETCH_MESSAGES",
        payload: res.data
      })
  );
};
