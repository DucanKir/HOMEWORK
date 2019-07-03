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
  return `The price is £${this.scoop + price}`
}

const ChocIcaeCrem = new IceCream(3, true)

// 3 - Countries=====================================


// 4 - bag===========================================
