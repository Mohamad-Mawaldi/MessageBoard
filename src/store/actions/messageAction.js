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

export const createMessage = messageData => dispatch => {
  Axios.post("http://5cdeb8c36f4437001467aad7.mockapi.io/api/messages", {
    ...messageData
  }).then(res => {
    console.log("CREATE_MESSAGES", res.data);
    dispatch({
      type: "CREATE_MESSAGE",
      payload: res.data
    });
  });
};

export const deleteMessage = messageId => dispatch => {
  console.log(" ....deleteMessage id", messageId);
  Axios.delete(`http://5cdeb8c36f4437001467aad7.mockapi.io/api/messages/`)
    .then(res => {
      dispatch({
        type: "DELETE_MESSAGE",
        payload: res.data
      });
    })
    .catch(err => console.log("err.respnse", err.response));
};

export const updateMessage = messageData => dispatch => {
  Axios.put(
    "http://5cdeb8c36f4437001467aad7.mockapi.io/api/messages/" + messageData.id,
    {
      ...messageData
    }
  ).then(res => {
    console.log("UPDATE_MESSAGE", res.data);
    dispatch({
      type: "UPDATE_MESSAGE",
      payload: res.data
    });
  });
};
