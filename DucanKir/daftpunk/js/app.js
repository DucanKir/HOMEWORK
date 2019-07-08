const body = document.querySelector('body')
const buttonContainer = document.getElementById('buttons')

document.addEventListener('keydown', logKey)
function logKey(e) {
  console.log(e.keyCode)
}

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

const buttons = [
  {name: 'Work it', sound: 'sounds/work_it.wav', key_code: 49, style: 'buttonStyle'},
  {name: 'Make it', sound: 'sounds/make_it.wav', key_code: 50, style: 'buttonStyle'},
  {name: 'Do it', sound: 'sounds/do_it.wav', key_code: 51, style: 'buttonStyle'},
  {name: 'Makes us', sound: 'sounds/makes_us.wav', key_code: 52, style: 'buttonStyle'},
  {name: 'Harder', sound: 'sounds/harder.wav', key_code: 81, style: 'addColor1'},
  {name: 'Better', sound: 'sounds/better.wav', key_code: 87, style: 'addColor1'},
  {name: 'Faster', sound: 'sounds/faster.wav', key_code: 69, style: 'addColor1'},
  {name: 'Stronger', sound: 'sounds/stronger.wav', key_code: 82, style: 'addColor1'},
  {name: 'More than', sound: 'sounds/more_than.wav', key_code: 65, style: 'addColor2'},
  {name: 'Hour', sound: 'sounds/hour.wav', key_code: 83, style: 'addColor2'},
  {name: 'Our', sound: 'sounds/our.wav', key_code: 68, style: 'addColor2'},
  {name: 'Never', sound: 'sounds/never.wav', key_code: 70, style: 'addColor2'},
  {name: 'Ever', sound: 'sounds/ever.wav', key_code: 90, style: 'buttonStyle'},
  {name: 'After', sound: 'sounds/after.wav', key_code: 88, style: 'buttonStyle'},
  {name: 'Work is', sound: 'sounds/work_is.wav', key_code: 67, style: 'buttonStyle'},
  {name: 'Over', sound: 'sounds/over.wav', key_code: 86, style: 'buttonStyle'},
]

for(let i = 0; i < buttons.length; i++) {
  const item = buttons[i]
  const music = document.createElement('audio')
  body.appendChild(music)
  music.src = item.sound
  const butt = document.createElement('button')
  butt.classList.add(item.style)
  buttonContainer.appendChild(butt)
  play(music, butt)
  butt.innerHTML = item.name
}
