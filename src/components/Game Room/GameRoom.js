import { React, useEffect } from "react";

import "../../styles/gameRoom.css";

import makeWsConnection from "./functions/makeWsConnection";
import start from "./functions/start";
import renderResults from "./functions/renderResults";

function GameRoom(props) {
  const roomName = props.match.params.roomId;
  const webSocket = makeWsConnection();

  webSocket.onmessage = (event) => {
    const actionToDo = JSON.parse(event.data).actionToDo;
    console.log(actionToDo);

    if (actionToDo === "askTheQuestion") {
      const question = prompt("Insert your question: ");
      webSocket.send(
        JSON.stringify({
          actionToDo: "sendTheQuestionToOtherPlayers",
          roomName: roomName,
          questionFromInquisitor: question,
        })
      );
    } else if (actionToDo === "sendTheAnswer") {
      const question = JSON.parse(event.data).question;
      const answer = prompt(question);
      if (answer !== null && answer !== "") {
        webSocket.send(
          JSON.stringify({
            actionToDo: "storeMyAnswer",
            roomName: roomName,
            answer: answer,
          })
        );
      }
    } else if (actionToDo === "showResults") {
      console.log("The results has arrived");
      renderResults(JSON.parse(event.data).results);
    }
  };

  return (
    <div className="gameRoom">
      <div className="instructionsToStart">
        <button className="startBtn" onClick={() => start(webSocket, roomName)}>
          Enter
        </button>
        <p>Press enter to enter the room, otherwise, you will not play.</p>
      </div>
      <div className="playground"></div>
    </div>
  );
}

export default GameRoom;
