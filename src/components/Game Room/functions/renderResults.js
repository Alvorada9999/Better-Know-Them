function renderResults(resultsObj) {
  let playgroundDiv = document.querySelector(".playground");
  playgroundDiv.innerHTML = "";

  let time = 300;

  for (let key in resultsObj) {
    time = time + 300;
    setTimeout(() => {
      let resultDiv = document.createElement("div");
      resultDiv.classList.add("resultDiv");
      resultDiv.innerHTML = resultsObj[key];
      playgroundDiv.appendChild(resultDiv);
    }, time);
  }
}

export default renderResults;
