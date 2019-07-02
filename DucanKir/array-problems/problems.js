/* eslint-disable no-unused-vars */

// using `filter` write a function which returns all the string elements in an array
// eg: stringsOnly([10, 'Mike', '23', NaN, 'elephant']) => ['Mike', '23', 'elephant']

function stringsOnly(array) {
  return array.filter((thing) => typeof thing === 'string')
}

// using `map` write a function that converts an array of farenheit values to celcius
// eg: convertTemps([23, 140, 212, 41]) => [-5, 60, 100, 5]

function convertTemps(array) {
  return array.map((temp) => (temp - 32) * 5 / 9)
}

// using `reduce` write a function that returns the total number of characters in an array of words
// eg: characterCount(['Stay', 'hungry', 'stay', 'foolish']) => 21

function characterCount(array) {
  return array.reduce((total, element) => total + element.length, 0)
}

// using `some` write a function that determines whether an array contains a falsey value
// eg: containsFalsey([100, {}, [], 'Mike']) => false, containsFalsey([100, {}, NaN, 'Mike']) => true

function containsFalsey(array) {
  return array.some((element) => !element)
}

// using `every` write a function that determines whether every number in an array is a square number (ie its square root is a whole number)
// eg: allSquare([81, 9, 16]) => true, allSquare([10, 50, 8]) => false


function allSquare(array) {
  return array.every((element) => Math.sqrt(element) % 1 === 0)
}

// using any array method, write a function that returns the product of an array (ie the values multiplied by each other). Your function should convert strings to numbers, and should only return a positive number
// eg: positiveProduct([5, 12, 6]) => 360, positiveProduct([-14, 8, 9]) => 1008

function positiveProduct(array) {
  return array.reduce((product, element) => Math.abs(product *+(element)))
}

// using any array method, write a function that returns the string elements of an array that have a given number of characters or larger
// eg: wordsOfLength(['emu', 'caterpiller', 'rooster'], 4) => ['caterpiller', 'rooster']

function wordsOfLength(array, minLength) {
  return array.filter((element) => element.length >= minLength)
}

// using any array method, write a function that converts an array of measurements as strings, into an array of numbers
// eg: measurementToNumber(['10cm', '4.2cm', '205cm']) => [10, 4.2, 205]

function measurementToNumber(array) {
  return array.map(element => parseFloat(element))
}

// using `split` and `filter` write a function that counts the number of vowels in a sentence
// eg: numberOfVowels('Stay classy San Diego') => 6

function numberOfVowels(string) {

  return string.split('').filter((letter) => 'aeiouAEIOU'.includes(letter)).length



}

// using, `split`, `map` and `join`, write a function that capitalises the first letter of each word in a sentance
// eg: titleCase('The lord of the rings') => 'The Lord Of The Rings'

function titleCase(string) {
  return string.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}
