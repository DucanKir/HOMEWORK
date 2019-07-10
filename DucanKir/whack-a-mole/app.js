

const startButton = document.querySelector('.start')
const gameCells = document.querySelectorAll('img')
const resetButton = document.querySelector('.reset')
const scoreCounter = document.querySelector('.score')
const timer = document.querySelector('.timer')
var timerId
let gameId
var timerTime = 30
let score = 0
scoreCounter.innerHTML = score
timer.innetHTML = 30
const img = 'img/mole-hole-png-3.png'

console.log(gameCells)

function startGame () {
  setInterval(function(){
    if (timerTime === 0) {
      clearInterval(timerId)
      clearInterval(gameId)
    } else {
      timerTime--
      timer.textContent = timerTime
    }
  }, 1000)
  let gameId = setInterval(function(){
    gamePlay()
  }, 1000)

}

function gamePlay () {
  const random = Math.ceil(Math.random() * 15)
  gameCells[random].src = img
  setTimeout(function(){
    gameCells[random].src = ''
  }, 1000)
}

// function cellInteraction () {
//   if(gameCells.src === 'img/mole-hole-png-3.png') {
//     score++
//   }
// }
startButton.addEventListener('click', startGame)

gameCells.forEach( function (element) {
  element.addEventListener('click', function () {
    score++
    scoreCounter.innerHTML = score
    console.log(score)
  })
})

resetButton.addEventListener('click', function (){
  score = 0
  scoreCounter.innerHTML = score
  timerTime = 30
  timer.innetHTML = 30
  gameId = null
  timerId = null
  clearInterval(timerId)
  clearInterval(gameId)
})
