/* global describe, xdescribe, it */
/* eslint-disable no-undef */

const chai  = window.chai
const expect = chai.expect

describe('stringsOnly', () => {
  it('should return only the strings of an array', () => {
    expect(stringsOnly([10, 'Mike', '23', NaN, 'elephant'])).to.deep.equal(['Mike', '23', 'elephant'])
    expect(stringsOnly([{}, [], 99, false])).to.deep.equal([])
    expect(stringsOnly(['I', 'am', 'the', 'eggman'])).to.deep.equal(['I', 'am', 'the', 'eggman'])
  })
})

describe('convertTemps', () => {
  it('should convert farenheit to celcius for all temperatures in the array', () => {
    expect(convertTemps([23, 140, 212, 41])).to.deep.equal([-5, 60, 100, 5])
    expect(convertTemps([-58, -22, -4, 14])).to.deep.equal([-50, -30, -20, -10])
    expect(convertTemps([104, 122, 158, 176])).to.deep.equal([40, 50, 70, 80])
  })
})

describe('characterCount', () => {
  it('should sum the total number of characters in the array', () => {
    expect(characterCount(['Stay', 'hungry', 'stay', 'foolish'])).to.equal(21)
    expect(characterCount(['Where', 'is', 'the', 'stone'])).to.equal(15)
    expect(characterCount(['Pack', 'it', 'up', 'pack', 'it', 'in', 'let', 'me', 'begin'])).to.equal(26)
  })
})

describe('containsFalsey', () => {
  it('should check if there is a falsey value in the array', () => {
    expect(containsFalsey([100, {}, [], 'Mike'])).to.be.false
    expect(containsFalsey([100, {}, NaN, 'Mike'])).to.be.true
    expect(containsFalsey(['What\'s', 'up', 'doc'])).to.be.false
  })
})

describe('allSquare', () => {
  it('should check if all numbers are square', () => {
    expect(allSquare([81, 9, 16])).to.be.true
    expect(allSquare([10, 50, 8])).to.be.false
  })
})

describe('positiveProduct', () => {
  it('should find the product of the array, expressed as a positive value', () => {
    expect(positiveProduct([5, 12, 6])).to.equal(360)
    expect(positiveProduct([-14, 8, 9])).to.equal(1008)
  })
})

describe('wordsOfLength', () => {
  it('should return the strings that have the given number of characters or longer', () => {
    expect(wordsOfLength(['emu', 'caterpiller', 'rooster'], 4)).to.deep.equal(['caterpiller', 'rooster'])
    expect(wordsOfLength(['John', 'Daenerys', 'Cersei'], 6)).to.deep.equal(['Daenerys', 'Cersei'])
  })
})

describe('measurementToNumber', () => {
  it('should convert the measurements to numbers', () => {
    expect(measurementToNumber(['10cm', '4.2cm', '205cm'])).to.deep.equal([10, 4.2, 205])
    expect(measurementToNumber(['100mm', '42mm', '2.05mm'])).to.deep.equal([100, 42, 2.05])
  })
})

describe('numberOfVowels', () => {
  it('should find the total number of vowels in the string', () => {
    expect(numberOfVowels('Stay classy San Diego')).to.equal(6)
    expect(numberOfVowels('I love lamp')).to.equal(4)
    expect(numberOfVowels('Whammy!')).to.equal(1)
  })
})

describe('titleCase', () => {
  it('should capitalise the first letter of each word', () => {
    expect(titleCase('The lord of the rings')).to.equal('The Lord Of The Rings')
    expect(titleCase('The red hot chili peppers')).to.equal('The Red Hot Chili Peppers')
  })
})
