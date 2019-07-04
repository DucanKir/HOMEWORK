/* global describe, xdescribe, it, beforeEach */
/* eslint-disable no-undef */

const chai  = window.chai
const expect = chai.expect

describe('laptop', () => {
  it('should have a `make` property which is a string', () => {
    expect(laptop).to.have.property('make')
    expect(laptop.make).to.be.a('string')
  })

  it('should have a `model` property which is a string', () => {
    expect(laptop).to.have.property('model')
    expect(laptop.model).to.be.a('string')
  })

  it('should have a `ram` property which is a number', () => {
    expect(laptop).to.have.property('ram')
    expect(laptop.ram).to.be.a('number')
  })

  it('should have a `storage` property which is a number', () => {
    expect(laptop).to.have.property('storage')
    expect(laptop.storage).to.be.a('number')
  })
})

describe('wineBottle', () => {
  it('should have a `name` property which is a string', () => {
    expect(wineBottle).to.have.property('name')
    expect(wineBottle.name).to.be.a('string')
  })

  it('should have a `grape` property which is a string', () => {
    expect(wineBottle).to.have.property('grape')
    expect(wineBottle.grape).to.be.a('string')
  })

  it('should have a `vinatge` property which is a number', () => {
    expect(wineBottle).to.have.property('vintage')
    expect(wineBottle.vintage).to.be.a('number')
  })

  it('should have a `volume` property which is a number', () => {
    expect(wineBottle).to.have.property('volume')
    expect(wineBottle.volume).to.be.a('number')
  })

  it('should have a `amountRemaining` property which is a number', () => {
    expect(wineBottle).to.have.property('amountRemaining')
    expect(wineBottle.amountRemaining).to.be.a('number')
  })

  it('should have a `drink` method', () => {
    expect(wineBottle.drink).to.be.a('function')
  })

  it('should remove the given amount from `amountRemaining`', () => {
    wineBottle.amountRemaining = 750
    wineBottle.drink(250)
    expect(wineBottle.amountRemaining).to.eq(500)
  })

  it('should have a `refill` method', () => {
    expect(wineBottle.refill).to.be.a('function')
  })

  it('should add the given amount from `amountRemaining`', () => {
    wineBottle.amountRemaining = 500
    wineBottle.refill(250)
    expect(wineBottle.amountRemaining).to.eq(750)
  })
})

describe('Product', () => {

  let product

  beforeEach(() => {
    product = new Product('iPhone', 'Latest model', 800)
  })

  it('should have a `name` property which is a string', () => {
    expect(product).to.have.property('name')
    expect(product.name).to.be.a('string')
  })

  it('should have a `description` property which is a string', () => {
    expect(product).to.have.property('description')
    expect(product.description).to.be.a('string')
  })

  it('should have a `price` property which is a number', () => {
    expect(product).to.have.property('price')
    expect(product.price).to.be.a('number')
  })
})

describe('Cart', () => {

  let cart, shirt, cap, trainers

  beforeEach(() => {
    cart = new Cart()
    shirt = {
      name: 'Shirt',
      description: 'White, 16" collar, long-sleve',
      price: 20
    }
    cap = {
      name: 'Cap',
      description: 'Orange, snap-back',
      price: 30
    }
    trainers = {
      name: 'Trainers',
      description: 'Adidas Campus, navy',
      price: 70
    }
  })

  it('should have a `contents` property which is an array', () => {
    expect(cart).to.have.property('contents')
    expect(cart.contents).to.be.an('array')
  })

  it('should have an `addItem` method', () => {
    expect(cart.addItem).to.be.a('function')
  })

  it('should be able to add an item to the `contents`', () => {
    cart.addItem(shirt)
    expect(cart.contents.length).to.equal(1)
  })

  it('should have a `removeItem` method', () => {
    expect(cart.removeItem).to.be.a('function')
  })

  it('should be able to remove an item from the `contents`', () => {
    cart.addItem(shirt)
    cart.addItem(trainers)
    cart.removeItem(shirt)
    expect(cart.contents.length).to.equal(1)
  })

  it('should have a `empty` method', () => {
    expect(cart.empty).to.be.a('function')
  })

  it('should be able to remove all items from the `contents`', () => {
    cart.addItem(cap)
    cart.addItem(shirt)
    cart.addItem(trainers)
    cart.empty()
    expect(cart.contents.length).to.eq(0)
  })

  it('should have a `getTotal` method', () => {
    expect(cart.getTotal).to.be.a('function')
  })

  it('should sum to prices of all items in the `contents`', () => {
    cart.addItem(cap)
    cart.addItem(shirt)
    cart.addItem(trainers)
    expect(cart.getTotal()).to.eq(120)
  })
})

describe('Shape', () => {
  let shape

  beforeEach(() => {
    shape = new Shape(10, 20)
  })

  it('should have a `width` property which is a number', () => {
    expect(shape).to.have.property('width')
    expect(shape.width).to.be.a('number')
  })

  it('should have a `height` property which is a number', () => {
    expect(shape).to.have.property('height')
    expect(shape.height).to.be.a('number')
  })

  it('should have a `getArea` method', () => {
    expect(shape.getArea).to.be.a('function')
  })

  it('should calculate the area of the shape', () => {
    expect(shape.getArea()).to.equal(200)
  })

  it('should have a `getPerimeter` method', () => {
    expect(shape.getPerimeter).to.be.a('function')
  })

  it('should calculate the perimeter of the shape', () => {
    expect(shape.getPerimeter()).to.equal(60)
  })
})

describe('Square', () => {
  let shape

  beforeEach(() => {
    shape = new Square(20)
  })

  it('should extend the Shape class', () => {
    expect(shape instanceof Shape).to.be.true
  })

  it('should have a `width` property which is a number', () => {
    expect(shape).to.have.property('width')
    expect(shape.width).to.be.a('number')
  })

  it('should have a `height` property which is a number', () => {
    expect(shape).to.have.property('height')
    expect(shape.height).to.be.a('number')
  })

  it('should have a `getArea` method', () => {
    expect(shape.getArea).to.be.a('function')
  })

  it('should calculate the area of the square', () => {
    expect(shape.getArea()).to.equal(400)
  })

  it('should have a `getPerimeter` method', () => {
    expect(shape.getPerimeter).to.be.a('function')
  })

  it('should calculate the perimeter of the square', () => {
    expect(shape.getPerimeter()).to.equal(80)
  })
})

describe('Triangle', () => {
  let shape

  beforeEach(() => {
    shape = new Triangle(10, 20)
  })

  it('should extend the Shape class', () => {
    expect(shape instanceof Shape).to.be.true
  })

  it('should have a `width` property which is a number', () => {
    expect(shape).to.have.property('width')
    expect(shape.width).to.be.a('number')
  })

  it('should have a `height` property which is a number', () => {
    expect(shape).to.have.property('height')
    expect(shape.height).to.be.a('number')
  })

  it('should have a `getArea` method', () => {
    expect(shape.getArea).to.be.a('function')
  })

  it('should calculate the area of the triangle', () => {
    expect(shape.getArea()).to.equal(100)
  })

  it('should have a `getPerimeter` method', () => {
    expect(shape.getPerimeter).to.be.a('function')
  })

  it('should calculate the perimeter of the triangle', () => {
    expect(shape.getPerimeter()).to.equal(37.63441361516796)
  })
})
