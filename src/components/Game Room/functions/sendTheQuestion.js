import hideQuestionForm from "./animations/hideQuestionForm";

function sendTheQuestion(webSocket, roomName) {
  let question = document.querySelector('.questionInputField').value;
  webSocket.send(
    JSON.stringify({
      actionToDo: "sendTheQuestionToOtherPlayers",
      roomName: roomName,
      questionFromInquisitor: question,
    })
  );
  hideQuestionForm();
  document.querySelector(".questionInputField").value = "";
}

export default sendTheQuestion;
