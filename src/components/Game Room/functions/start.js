const start = (webSocket, roomId) => {
  document.querySelector(
    ".instructionsToStart"
  ).innerHTML = `<div className='instructionsToStart'>
    <p>Every 30 seconds:</p>
    <p>1 - A new player asks a question</p>
    <p>2 - The answers to the previous question will be shown</p>
  </div>`;
  console.log("Sending requisiton to enter the room");
  webSocket.send(
    JSON.stringify({
      actionToDo: "enterRoom",
      roomName: roomId,
    })
  );
};

export default start;
