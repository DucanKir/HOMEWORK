// 1 - cars=========================================

function Car(brand, seats) {
  this.brand = brand
  this.seats = seats
  this.speed = 0
}

Car.prototype.speedUp = function() {
  this.speed += 20
  return `The ${this.brand} is travelling at ${this.speed}mph`
}
Car.prototype.slowDown = function() {
  this.speed -= 20
  return `The ${this.brand} is travelling at ${this.speed}mph`
}

const ferrari = new Car('Ferrari', 2)

// 2 - Ice cream===================================

function IceCream(scoop, flake) {
  this.scoop = scoop
  this.flake = flake
}

IceCream.prototype.calculatePrice = function () {
  let price = 0
  if(this.flake) {
    price = 0.30
  } else {
    price = 0
  }
  return `The price is £${this.scoop*1.10 + price}`
}

const ChocIcaeCrem = new IceCream(3, true)
const VanillaIcaeCrem = new IceCream(5, false)

// 3 - Countries=====================================

function Country(name, population, size) {
  this.name = name
  this.population = population
  this.size = size
}

Country.prototype.calculateDensity = function () {
  let density = (this.population/this.size).toFixed(2)
  let rating
  if(density <= 100) {
    rating = 'low'
  } else if(density > 100 && this.density <= 500) {
    rating = 'average'
  } else if (density > 500) {
    rating = 'high'
  }
  return `${this.name} has a population density of ${density} people per sq km. This is ${rating}.`
}


const UK = new Country('UK', 66000000, 240000)
const US = new Country('UK', 372000000, 9834000)
// 4 - bag===========================================

function Bag () {
  this.contents = []
}

Bag.prototype.addItem = function (item) {
  return this.contents.push(item)
}
Bag.prototype.removeItem = function (item) {
  return this.contents.pop(item)
}
Bag.prototype.listItem = function () {
  return this.contents.join(', ')
}
Bag.prototype.emptyBag = function () {
  this.contents = []
}

const leatherBag = new Bag()
