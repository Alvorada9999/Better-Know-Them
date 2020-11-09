function showAnswerForm(question) {
  document.querySelector(".questionToAnswerField").innerHTML = question;
  document
    .querySelector(".answerForm")
    .animate(
      [{ top: "-200px" }, { color: "#431236", offset: 0.3 }, { top: "200px" }],
      {
        duration: 800,
        fill: "forwards",
        easing: "ease-in-out",
      }
    );
}

export default showAnswerForm;
