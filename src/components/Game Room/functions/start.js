const start = (webSocket, roomId) => {
  document.querySelector(
    ".gameRoom"
  ).removeChild(document.querySelector('.instructionsToStart'));
  webSocket.send(
    JSON.stringify({
      actionToDo: "enterRoom",
      roomName: roomId,
    })
  );
};

export default start;
