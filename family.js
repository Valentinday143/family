let daughterAnswer = "Not answered";
let loveAnswer = "Not answered";

function selectDaughter(ans, btn){
  daughterAnswer = ans;

  // remove active from both
  document.getElementById("yes1").classList.remove("selected");
  document.getElementById("no1").classList.remove("selected");

  // add active style
  btn.classList.add("selected");
}

function selectLove(ans, btn){
  loveAnswer = ans;

  btn.classList.add("selected");
  document.getElementById("submit").classList.remove("hidden");
}

let size = 18;

function growNo(){
  size += 8;
  document.getElementById("no2").style.fontSize = size + "px";
}

window.onload = function(){
  document.getElementById("yes2").style.pointerEvents = "none";
};

function saveAndNext(){

  let submission = {
    date: new Date().toLocaleString(),
    daughter: daughterAnswer,
    expectation: document.getElementById("q1").value,
    happiness: document.getElementById("q2").value,
    future: document.getElementById("q3").value,
    loveCompare: loveAnswer
  };

  // Get old submissions
  let allSubmissions = JSON.parse(localStorage.getItem("familyAnswers")) || [];

  // Add new one
  allSubmissions.push(submission);

  // Save back
  localStorage.setItem("familyAnswers", JSON.stringify(allSubmissions));

  location = "result.html";
}

