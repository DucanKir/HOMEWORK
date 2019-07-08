const body = document.querySelector('body')
const buttonContainerRed = document.getElementById('buttonsRed')
const buttonContainerGreen = document.getElementById('buttonsGreen')
const buttonContainerYellow = document.getElementById('buttonsYellow')
const buttonContainerRed2 = document.getElementById('buttonsRed2')


// play audio
function play (sound, button) {
  button.addEventListener('click', () => {
    if(sound.paused) {
      sound.play()
    } else {
      sound.pause()
      sound.currentTime = 0
    }
  })
}


const names = ['Work it','Make it','Do it','Makes us','Harder','Better','Faster','Stronger','More than','Hour','Our','Never','Ever','After','Work is','Over']

const buttons = {
  workit: 'sounds/work_it.wav',
  makeit: 'sounds/make_it.wav',
  doit: 'sounds/do_it.wav',
  makesus: 'sounds/makes_us.wav',
  harder: 'sounds/harder.wav',
  better: 'sounds/better.wav',
  faster: 'sounds/faster.wav',
  stronger: 'sounds/stronger.wav',
  morethan: 'sounds/more_than.wav',
  hour: 'sounds/hour.wav',
  our: 'sounds/our.wav',
  never: 'sounds/never.wav',
  ever: 'sounds/ever.wav',
  after: 'sounds/after.wav',
  workis: 'sounds/work_is.wav',
  over: 'sounds/over.wav'
}
// function assignName ()

Object.keys(buttons).forEach(function (item) {
  //Crate music
  const music = document.createElement('audio')
  body.appendChild(music)
  music.src = buttons[item]
  //create button
  const butt = document.createElement('button')
  butt.classList.add('buttonStyle')
  //append button to div
  if (names.length >12) {
    buttonContainerRed.appendChild(butt)
  } else if (names.length <=12 && names.length > 8) {
    butt.classList.add('addColor1')
    buttonContainerGreen.appendChild(butt)
  } else if (names.length <=8 && names.length > 4) {
    butt.classList.add('addColor2')
    buttonContainerYellow.appendChild(butt)
  } else {
    buttonContainerRed2.appendChild(butt)
  }
  //add event listener
  play(music, butt)
  //give button name
  butt.innerHTML = names[0]
  names.shift()
})
