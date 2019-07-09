const buttons = document.querySelectorAll('.choiseButton')
const winLose = document.querySelector('.gameResult')
const pScore = document.querySelector('.playerScore')
const cScore = document.querySelector('.computerScore')
const reset = document.querySelector('.reset')
const pPic = document.querySelector('.playerChoise')
const cPic = document.querySelector('.computerChoise')

pPic.src = 'img/0.png'
cPic.src = 'img/0.png'
var result
var cChoise
var pChoise
var playerScore = 0
var computerScore = 0


reset.addEventListener('click', function(){
  cChoise =''
  pChoise = ''
  playerScore = 0
  computerScore = 0
  winLose.innerHTML = 'New game'
  pScore.innerHTML = 0
  cScore.innerHTML = 0
  pPic.src = 'img/0.png'
  cPic.src = 'img/0.png'
})

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
function picsInPlay (pCh, cCh) {
  if(pCh === 1) {
    pPic.src = 'img/rock.png'
  } else if (pCh === 2) {
    pPic.src = 'img/paper.png'
  } else {
    pPic.src ='img/scissors.png'
  }
  if(cCh === 1) {
    cPic.src = 'img/rockC.png'
  } else if (cCh === 2) {
    cPic.src = 'img/paperC.png'
  } else {
    cPic.src ='img/scissorsC.png'
  }
}
buttons.forEach(function (item){
  item.addEventListener('click', function () {
    cChoise = Math.floor(Math.random() * (3 - 1 + 1)) + 1
    pChoise = +item.value
    picsInPlay(pChoise, cChoise)
    result = compare(pChoise, cChoise)
    if(result) {
      winLose.innerHTML = 'You Win!'
      playerScore += 1
      scoreChange(pScore)
    } else if (cChoise === pChoise) {
      winLose.innerHTML = 'Draw'
    } else {
      winLose.innerHTML = 'Loser!'
      computerScore += 1
      scoreChange(cScore)

    }
    pScore.innerHTML = playerScore
    cScore.innerHTML = computerScore

  })
})

function scoreChange (p) {
  p.classList.add('scoreChanged')

  setTimeout(function(){
    p.classList.remove('scoreChanged')

  }, 500)
}
