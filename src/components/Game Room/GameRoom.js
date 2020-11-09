import "../../styles/gameRoom.css";

import makeWsConnection from "./functions/makeWsConnection";
import start from "./functions/start";
import renderResults from "./functions/renderResults";
import showQuestionForm from "./functions/animations/showQuestionForm";
import sendTheQuestion from "./functions/sendTheQuestion";
import showAnswerForm from "./functions/animations/showAnswerForm";
import sendTheAnswer from "./functions/sendTheAnswer";

function GameRoom(props) {
  const webSocket = makeWsConnection();

  let question = '';

  const roomName = props.match.params.roomId;

  webSocket.onmessage = (event) => {
    const actionToDo = JSON.parse(event.data).actionToDo;
    console.log(actionToDo);

    if (actionToDo === "askTheQuestion") {
      showQuestionForm();
    } else if (actionToDo === "sendTheAnswer") {
      question = JSON.parse(event.data).question;
      showAnswerForm(JSON.parse(event.data).question);
    } else if (actionToDo === "showResults") {
      console.log("The results has arrived");
      renderResults(JSON.parse(event.data).results, question);
    }
  };

  return (
    <div className="gameRoom">
      <div className="questionForm">
        <input
          className="questionInputField"
          type="text"
          placeholder="What's your question ?"
        ></input>
        <button
          onClick={() => sendTheQuestion(webSocket, roomName)}
        >
          SEND
        </button>
      </div>
      <div className="answerForm">
        <p className="questionToAnswerField"></p>
        <input
          className="answerInputField"
          type="text"
          placeholder="What's your answer ?"
        ></input>
        <button
          onClick={() => sendTheAnswer(webSocket, roomName)}
        >
          SEND
        </button>
      </div>
      <div className="instructionsToStart">
        <button className="startBtn" onClick={() => start(webSocket, roomName)}>
          Enter
        </button>
        <p>Press enter to enter the room, otherwise, you will not play.</p>
      </div>
      <p className='question'>asdf</p>
      <div className="playground"></div>
    </div>
  );
}

export default GameRoom;
