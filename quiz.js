// Input variables stored, Answers to questions
let answer1 = "singles";
let answer2 = "practice";
let answer3 = "opposite";

// Buttom Event Listener
let submitButton = document
  .getElementById("click")
  .addEventListener("click", markQuiz);

// Function to command Code
function markQuiz() {
  let score = 0;
  let feedback = "";

  // Answer 1 Justification

  let userAnswer1 = document.getElementById("answer1").value;
  if (userAnswer1 == answer1) {
    score++;
    feedback += "<p>Question 1: Correct!</p>";
  } else {
    feedback += `<p>Question 1: Incorrect. The correct answer is ${answer1}.</p>`;
  }

  // Answer 2 Justification
  
  let userAnswer2 = document.getElementById("answer2").value;
  if (userAnswer2 === "birdy") {
    score++;
    feedback += "<p>Question 2: Correct!</p>";
  } else if (userAnswer2 === "shuttlecock") {
    feedback += "<p>Question 2: Correct!</p>";
    score++;
  } else {
    feedback +=
      "<p>Question 2: Incorrect. The correct answer is birdy or Shuttlecock.</p>";
  }

  // Answer 3 Justification

  let userAnswer3 = document.getElementById("answer3").value;
  if (userAnswer3 == answer2) {
    score++;
    feedback += "<p>Question 3: Correct!</p>";
  } else {
    feedback += `<p>Question 3: Incorrect. The correct answer is ${answer2}.</p>`;
  }

  // Answer 4 Justification
  let userAnswer4 = document.getElementById("answer4").value;
  if (userAnswer4 == answer3) {
    score++;
    feedback += "<p>Question 1: Correct!</p>";
  } else {
    feedback += `<p>Question 1: Incorrect. The correct answer is ${answer3}.</p>`;
  }
  // Encouragement
  let percentage = Math.round((score / 4) * 100);
  let scoreText = `<br>You got ${score}/4 (${percentage}%)`;

  if (percentage >= 75) {
    feedback += "<p>Great job!</p>";
  } else if (percentage >= 50) {
    feedback += "<p>You can do better next time</p>";
  } else {
    feedback += "<p>Keep practicing!</p>";
  }

  // Output of Score
  document.getElementById("resultDiv").innerHTML = scoreText + feedback;
}
console.log(userAnswer1);
