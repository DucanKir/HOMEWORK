import 'bulma'
import './style.scss'

const container = document.querySelector('.columns')
const dropdown = document.querySelector('select')
// const netherlands = []
// const france = []
// const wales = []
// const denmark = []
// const england = []
// const france = []
// const france = []


fetch('https://cheesebored.herokuapp.com/cheeses')
  .then((res) => res.json())
  .then((data) => {
    data.forEach(cheese => {
      const column = document.createElement('div')
      column.className = 'column is-one-quarter-desktop is-half-tablet'

      column.innerHTML = `
        <div class="card">
          <div class="card-header-title">
            <h2 class="title is-4">${cheese.name}</h2>
          </div>
          <div class="card-image">
            <figure class="image" style="background-image: url(${cheese.image})">
            </figure>
          </div>
          <div class="card-content">
            <h3 class="title is-5">${cheese.origin}</h3>
            <h4 class="title is-6">${cheese.tastingNotes}</h4>
          </div>
        </div>
      `

      container.appendChild(column)
    })
  })

dropdown.addEventListener('change', (e) => {
  let result = []
  // for(let i = 0; i<data.length; i++){
  //   if (e.target.value === 'All Countries') {
  //     result.push(countriesData[i])
  //   } else if (countriesData[i].region === e.target.value) {
  //     result.push(countriesData[i])
  //   }
  // }
})
