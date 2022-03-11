score=0
function checkAnswer1() {
    if (document.getElementById("answer1_1").checked) {
      alert("Ooops! wrong answer. try again");
      document.getElementById("endgame").style.display="inline-block"
      document.getElementById("Q1").style.display="none"
    } else if (document.getElementById("answer1_2").checked) {
      alert("Ooops! wrong answer. try again");
      document.getElementById("Q1").style.display="none"
      document.getElementById("endgame").style.display="inline-block"
    } else if (document.getElementById("answer1_3").checked) {
      alert("Ooops! wrong answer. try again");
      document.getElementById("Q1").style.display="none"
      document.getElementById("endgame").style.display="inline-block"
    } else if (document.getElementById("answer1_4").checked) {
      score=score+1;
      document.getElementById("score").innerHTML="score: "+ score
      document.getElementById("Q1").style.display="none"
      document.getElementById("Q2").style.display="inline-block"
    }
  }

  function checkAnswer2() {
    if (document.getElementById("answer2_1").checked) {
      alert("Ooops! wrong answer. try again");
      document.getElementById("endgame").style.display="inline-block"
      document.getElementById("Q2").style.display="none"
    } else if (document.getElementById("answer2_2").checked) {
      alert("Ooops! wrong answer. try again");
      document.getElementById("endgame").style.display="inline-block"
      document.getElementById("Q2").style.display="none"
    } else if (document.getElementById("answer2_3").checked) {
        score=score+1;
        document.getElementById("score").innerHTML="score: "+ score
        document.getElementById("Q2").style.display="none"
        document.getElementById("Q3").style.display="inline-block"
    } else if (document.getElementById("answer2_4").checked) {
      
      alert("Ooops! wrong answer. try again");
      document.getElementById("endgame").style.display="inline-block"
      document.getElementById("Q2").style.display="none"
    }
  }
  function checkAnswer3() {
    if (document.getElementById("answer3_1").checked) {
      alert("Ooops! wrong answer. try again");
      document.getElementById("endgame").style.display="inline-block"
      document.getElementById("Q3").style.display="none"
    } else if (document.getElementById("answer3_2").checked) {
      alert("Ooops! wrong answer. try again");
      document.getElementById("endgame").style.display="inline-block"
      document.getElementById("Q3").style.display="none"
      
    } else if (document.getElementById("answer3_3").checked) {
        score=score+1;
        document.getElementById("score").innerHTML="score: "+ score
        document.getElementById("Q3").style.display="none"
        document.getElementById("Q4").style.display="inline-block"
    } else if (document.getElementById("answer3_4").checked) {
      
      alert("Ooops! wrong answer. try again");
      document.getElementById("endgame").style.display="inline-block"
      document.getElementById("Q3").style.display="none"
    }
  }

  function checkAnswer4() {
    if (document.getElementById("answer4_1").checked) {
        score=score+1;
        document.getElementById("score").innerHTML="score: "+ score
        document.getElementById("Q4").style.display="none"
        document.getElementById("Q5").style.display="inline-block"
    } else if (document.getElementById("answer4_2").checked) {
      alert("Ooops! wrong answer. try again");
      document.getElementById("endgame").style.display="inline-block"
      document.getElementById("Q4").style.display="none"
    } else if (document.getElementById("answer4_3").checked) {
        alert("Ooops! wrong answer. try again"); 
        document.getElementById("endgame").style.display="inline-block"
        document.getElementById("Q4").style.display="none"
    } else if (document.getElementById("answer4_4").checked) {
      
      alert("Ooops! wrong answer. try again");
      document.getElementById("endgame").style.display="inline-block"
      document.getElementById("Q4").style.display="none"
    }
  }
  

  function checkAnswer5() {
    if (document.getElementById("answer5_1").checked) {
      alert("Ooops! wrong answer. try again");
      document.getElementById("Q5").style.display="none"
      document.getElementById("endgame").style.display="inline-block"
    } else if (document.getElementById("answer5_2").checked) {
        score=score+1;
        document.getElementById("score").innerHTML="score: "+ score
        document.getElementById("Q5").style.display="none"
        document.getElementById("success").style.display="inline-block"
    } else if (document.getElementById("answer5_3").checked) {
        alert("Ooops! wrong answer. try again");
        document.getElementById("endgame").style.display="inline-block"
        document.getElementById("Q5").style.display="none"
    } else if (document.getElementById("answer5_4").checked) {
      
      alert("Ooops! wrong answer. try again");
      document.getElementById("endgame").style.display="inline-block"
      document.getElementById("Q5").style.display="none"

    }
  }
  
  