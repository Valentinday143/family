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
async function saveAndNext(){

  let submission = {
    website: "Family Website ❤️",
    date: new Date().toLocaleString(),
    daughter: daughterAnswer,
    expectation: document.getElementById("q1").value,
    happiness: document.getElementById("q2").value,
    future: document.getElementById("q3").value,
    loveCompare: loveAnswer
  };

  try {

    const response = await fetch("https://formspree.io/f/xwvnoypy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(submission)
    });

    if(response.ok){
      alert("Submitted successfully 💌");
      location = "result.html";
    } else {
      alert("Submission failed 😢");
    }

  } catch(error){
    alert("Error sending form ❌");
  }
}


