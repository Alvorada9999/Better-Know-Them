function showQuestionForm() {
  document
    .querySelector(".questionForm")
    .animate(
      [{ top: "-160px" }, { color: "#431236", offset: 0.3 }, { top: "200px" }],
      {
        duration: 800,
        fill: "forwards",
        easing: "ease-in-out",
      }
    );
}

export default showQuestionForm;
