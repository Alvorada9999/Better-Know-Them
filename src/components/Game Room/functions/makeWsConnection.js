const makeWsConnection = () => {
  console.log("Making ws connection");
  let socket = new WebSocket("wss://sleepy-hamlet-51050.herokuapp.com/socket");
  return socket;
};

export default makeWsConnection;
