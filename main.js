
function listen() {
  var synth = window.speechSynthesis;
  var speak_data =
    "Welcome to the quiz app. There are going to be five questions. There will be four options.You have to choose the correct one. You will get thirty seconds to answer each question. If your answer is incorrect you will have to restart the quiz. All the best  ";
  var utterThis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
}

function checkAnswer() {
  if (document.getElementById("answer1_1").checked) {
    alert("Ooops! wrong answer. try again");
  } else if (document.getElementById("answer1_2").checked) {
    alert("Ooops! wrong answer. try again");
  } else if (document.getElementById("answer1_3").checked) {
    alert("Ooops! wrong answer. try again");
  } else if (document.getElementById("answer1_4").checked) {
    alert("Ooops! wrong answer. try again");
  }
}
 
function start(){
  window.location="quiz.html"
}