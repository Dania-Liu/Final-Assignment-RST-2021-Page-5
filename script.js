// Sets default value.
let fourthAnswer = 0

// Connects button that allows users to submit their answers to JavaScript.
document.getElementById('fourth-submit').addEventListener('click', fourthSubmit)
// Connects button that allows users to reveal a hint to JavaScript.
document.getElementById('fourth-hint').addEventListener('click', fourthHint)

// Creates function that activates when the user clicks on "Submit" for the fourth riddle.
function fourthSubmit () {
  fourthAnswer = document.getElementById('fourth-answer').value
  if (fourthAnswer === 'sham') {
    document.getElementById('fourth-outcome').innerHTML = ('Correct, please proceed.')
  } else {
    document.getElementById('fourth-outcome').innerHTML = ('Incorrect, try again.')
  }
}

// Creates function that reveals an image when the user clicks on "Hint" for the fourth riddle.
function fourthHint () {
  document.getElementById('fourth-picture').style.display = 'block'
}
