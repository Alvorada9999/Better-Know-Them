function hideQuestionForm() {
  document
    .querySelector(".questionForm")
    .animate(
      [{ top: "200px" }, { color: "#431236", offset: 0.3 }, { top: "-160px" }],
      {
        duration: 800,
        fill: "forwards",
        easing: "ease-in-out",
      }
    );
}

export default hideQuestionForm;
