const body = document.querySelector('body')
const buttonContainer = document.getElementById('buttons')


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
  const music = document.createElement('audio')
  body.appendChild(music)
  music.src = buttons[item]
  const butt = document.createElement('button')
  buttonContainer.appendChild(butt)
  play(music, butt)
  butt.innerHTML = names[0]
  names.shift()

})
