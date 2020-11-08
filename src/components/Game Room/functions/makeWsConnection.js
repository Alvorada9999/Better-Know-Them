const makeWsConnection = () => {
  console.log("Making ws connection");
  let socket = new WebSocket("ws://192.168.0.112:8000/socket");
  /*setTimeout(() => {
    console.log('Sending requisiton to enter the room');
    //start(socket, roomId);
  }, 5000);*/

  /*socket.onopen = function (e) {
    socket.send(JSON.stringify({
      actionToDo: 'enterRoom',
      roomName: roomId
    }));
  };

  socket.onmessage = function (event) {
    
  };

  socket.onclose = function (event) {
    
  };

  socket.onerror = function (error) {

  };*/

  return socket;
};

export default makeWsConnection;
