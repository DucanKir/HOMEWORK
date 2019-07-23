import 'bulma'
import './style.scss'

const container = document.querySelector('.columns')

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
