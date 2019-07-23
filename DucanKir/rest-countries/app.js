
const container = document.querySelector('.container')
const dropdown = document.querySelector('select')

let countriesData = []

fetch('https://restcountries.eu/rest/v2/all')
  .then((res) => res.json())
  .then((data) => {
    countriesData = data
    displayCountries(countriesData)
  })

function displayCountries(arrayOfCountries) {
  container.innerHTML = ''
  arrayOfCountries.forEach(country => {
    const countryDiv = document.createElement('div')
    countryDiv.classList.add('country')
    countryDiv.innerHTML = `
    <div class="text">
      <h3>${country.name}</h3>
      <h4>${country.nativeName}</h4>
    </div>
    <img src="${country.flag}">
    `
    container.appendChild(countryDiv)
  })

  dropdown.addEventListener('change', (e) => {
    let result = []
    for(let i = 0; i<countriesData.length; i++){
      if (e.target.value === 'All Countries') {
        result.push(countriesData[i])
      } else if (countriesData[i].region === e.target.value) {
        result.push(countriesData[i])
      }
    }
    console.log(result)
    displayCountries(result)
  })
}
