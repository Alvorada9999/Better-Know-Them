const makeWsConnection = () => {
  let socket = new WebSocket("wss://better-know-them.herokuapp.com/socket");
  return socket;
};

export default makeWsConnection;
