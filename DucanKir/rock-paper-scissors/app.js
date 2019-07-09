const buttons = document.querySelectorAll('button')
const winLose = document.querySelector('h2')
const pScore = document.querySelector('.playerScore')
const cScore = document.querySelector('.computerScore')

var result
var cChoise
var pChoise
var playerScore = []
var computerScore = []
// 3 - Scissors
// 2 - paper
// 1 - rock

function compare (pChoise, cChoise) {
  if(pChoise === 3 && cChoise === 2) {
    return true
  } else if(pChoise === 2 && cChoise === 1){
    return true
  } else if(pChoise === 1 && cChoise === 3){
    return true
  } else {
    return false
  }
}

buttons.forEach(function (item){
  item.addEventListener('click', function () {
    cChoise = Math.floor(Math.random() * (3 - 1 + 1)) + 1
    pChoise = +item.value
    result = compare(pChoise, cChoise)
    if(result === true) {
      winLose.innerHTML = 'You Win!'
      playerScore.push(1)
    } else if (cChoise === pChoise) {
      winLose.innerHTML = 'Draw'
    } else {
      winLose.innerHTML = 'Loser!'
      computerScore.push(1)

    }
    pScore.innerHTML = playerScore.reduce((total, item) => total+item, 0)
    cScore.innerHTML = computerScore.reduce((total, item) => total+item, 0)
  })
})
