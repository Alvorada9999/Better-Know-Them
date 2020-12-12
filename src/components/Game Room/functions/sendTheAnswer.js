import hideAnswerForm from "./animations/hideAnswerForm";

function sendTheAnswer(webSocket, roomName) {
  let answer = document.querySelector('.answerInputField').value;
  if (answer !== null && answer !== "") {
    webSocket.send(
      JSON.stringify({
        actionToDo: "storeMyAnswer",
        roomName: roomName,
        answer: answer,
      })
    );
    hideAnswerForm();
    document.querySelector(".answerInputField").value = "";
  } else {
    alert("Invalid input!");
  }
}

export default sendTheAnswer;
