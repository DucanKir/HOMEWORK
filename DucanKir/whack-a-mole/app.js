

const startButton = document.querySelector('.start')
const gameCells = document.querySelectorAll('img')
const resetButton = document.querySelector('.reset')
const scoreCounter = document.querySelector('.score')
const scoreModal = document.querySelector('.scoreModal')
const timer = document.querySelector('.timer')
const modal = document.querySelector('.modal')

let gameId
var timerId
var timerTime = 15
let score = 0
const img = 'img/mole-hole-png-3.png'
scoreCounter.innerHTML = score
timer.innetHTML = 15


function startGame () {
  timerId = setInterval(function(){
    if (timerTime === 0) {
      clearInterval(timerId)
      clearInterval(gameId)
      modal.style.display = 'flex'
    } else {
      timerTime--
      timer.textContent = timerTime
    }
  }, 1000)
  gameId = setInterval(function(){
    gamePlay()
  }, 1000)
  startButton.disabled = true

}

function gamePlay () {
  const random = Math.ceil(Math.random() * 15)
  gameCells[random].src = img
  setTimeout(function(){
    gameCells[random].src = ''
  }, 1000)
}

startButton.addEventListener('click', startGame)

gameCells.forEach( function (element) {
  element.addEventListener('click', function () {
    score++
    scoreCounter.innerHTML = score
    scoreModal.innerHTML = score
    scoreChange(scoreCounter)
  })
})

resetButton.addEventListener('click', function (){
  clearInterval(timerId)
  clearInterval(gameId)
  startButton.disabled = false
  score = 0
  scoreCounter.innerHTML = score
  timerTime = 15
  timer.innerHTML = 15
  modal.style.display = 'none'
  scoreModal.innerHTML = score
})

function scoreChange (score) {
  score.classList.add('scoreChange')
  setTimeout(function(){
    score.classList.remove('scoreChange')
  }, 500)
}
