import getRandomInt from "./getRandomInt";

function renderResults(resultsObj, question) {
  document.querySelector('.question').innerHTML = '';
  document.querySelector('.question').innerHTML = question;
  let playgroundDiv = document.querySelector(".playground");
  playgroundDiv.innerHTML = "";

  let time = 300;

  for (let key in resultsObj) {
    time = time + 300;
    setTimeout(() => {
      let resultDiv = document.createElement("div");
      resultDiv.classList.add("resultDiv");
      resultDiv.innerHTML = resultsObj[key];
      resultDiv.style.order = getRandomInt(100);
      playgroundDiv.appendChild(resultDiv);
    }, time);
  }
}

export default renderResults;
