/* eslint-disable no-unused-vars */

// write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
// eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"
function hello(string) {
  if(!string) {
    return 'Hello World!'
  } else {
    return `Hello ${string}!`
  }
}

// write a function that will calculate the area of a circle, given the radius
function areaOfCircle(radius) {
  return Math.PI * radius * radius
}

// write a function to convert celcius to farenheit
function celciusToFarenheit(celcius) {
  return celcius * 9 / 5 + 32
}

// write a function that will reverse a number (eg. 456733 become 337654)
function numberReverse(number) {
  return (+(number+'').split('').reverse().join(''))
}

// write a function to check if a word or phrase is a palindrome returning a boolean
// eg. palindromeCheck('dad') => true, palindrome('nonsense') => false
function palindromeCheck(string) {
  let word = string.split('')
  let reversedWord = (word.filter((letter) => letter !== ' ')).reverse().join('')
  // console.log(string, reversedWord)
  let newWord = (word.filter((letter) => letter !== ' ')).join('')
  // console.log(newWord)
  if (newWord === reversedWord) {
    return true
  } else {
    return false
  }
}

// write a function that returns the letters of a word or phrase in alphabetical order case insensitive
// eg. orderStringAlphabetically('javascript is cool') => 'aacciijlooprsstv'
function orderStringAlphabetically(string) {
  let arr = string.toLowerCase().split('').sort()
// console.log(arr)
  arr = (arr.filter((letter) => letter !== ' ')).join('')
  return arr
}

// write a function that capitalizes the first letter of each word
// eg. titleCase('the lord of the rings') => 'The Lord Of The Rings'
function titleCase(string) {
  let result
  return result = string.split(' ').map(element => element.charAt(0).toUpperCase()+ element.slice(1, element.length)).join(' ')
}

// write a function that returns the number of vowels in a string case insensitive
// 'y' should not be considered a vowel
// eg: numOfVowels('Yellow Submarine') => 6
function numOfVowels(string) {
  return string.split('').filter((element) => 'AEIOUaeiou'.includes(element)).length
}

// write a function which gets the total value of all elements in an array.
// it should be able to handle numbers and strings
// eg: sumArray([10, 9, 16]) => 35, sumArray(['10', '88', '1']) => 99
function sumArray(array) {
  return array.reduce((total, item) => total + +item, 0)
}

// write a function that frames a string in asterisks (*)
//                             ***************
// eg: frame('Hello Kitty') => * Hello Kitty *
//                             ***************
function frame(string) {
  let asterisks = '*'.repeat(string.length+4)
  return `${asterisks}\n* ${string} *\n${asterisks}`
}

// write a function to remove all empty values (null, undefined, '', NaN, false) EXCEPT 0 from an array.
// It should handle complex data types eg: {}, [] etc.
// eg: [0, false, [], undefined, {}, NaN, 'Kevin'] => [0, [], {}, 'Kevin'];
function filterArr(item) {
  if(item === 0) {
    return true
  }
  return Boolean(item)
}
function removeBlank(array) {
  const arr = array.filter(filterArr)
  // console.log(arr)
  return arr
}

// write a function to return a random element from an array
// eg: [1,"elephant", "apple", 67] => "elephant"

function getRandom (min, max){
  return Math.floor(Math.random() * max + min)

}
function randomElement(array) {
  return array[getRandom(0, array.length)]
}

// write a function that returns the second lowest and second highest number in an array
// eg: [1,2,3,4,5,6,7,8] => [2,7]
function secondLowestSecondHighest(array) {

}

// write a function that will convert a price into coins needed to make up that price
// the coins available are 1, 2, 5, 10, 20, 50, 100
// the function should use the smallest number of coins possible
// eg: coins(1.99) => [100, 50, 20, 20, 5, 2, 2]
function coins(price) {

}

// write a function to merge two arrays and remove duplicates
// eg: mergeUnique([9,8,8,9], [7,8,8,7]) => [9,8,7]
function mergeUnique(arr1, arr2) {

}

// write a function that converts an array of strings into an array of objects, with the supplied key
// eg: arrayToObjects(["Mike", "Emily"], "name") => [{ name: "Mike" }, { name: "Emily"}]
function arrayToObjects(array, key) {

}

// write a function to convert an object into an array of arrays containing key and value
// eg: objectToArray({ name: 'Will Smith', dob: '15-09-1968' }) => [['name', 'Will Smith'], ['dob', '15-09-1968']];
function objectToArray(object) {

}

// write a function to return the number of occurances of each letter of a string in an object case insensitive
// eg. numOfOccurances('This is great') => { t: 2, h: 1, i: 2, s: 2, g: 1, r: 1, e: 1, a: 1 }
function numOfOccurances(string) {

}

// write a function to find the first n fibonacci numbers
// the fibonacci sequence is a series of numbers, each number is the sum of the last two
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 etc...
// eg: fibonacci(4) => [0,1,1,2]; fibonacci(8) => [0, 1, 1, 2, 3, 5, 8, 13];
function fibonacci(n) {

}

// write a function which returns the number of days between two dates (as strings with format YYYY-MM-DD)
// it should not return negative numbers
// eg: daysBetween("2017-01-01", "2017-02-01") => 31; daysBetween("2017-02-01", "2017-01-01") => 31
function daysBetween(date1, date2) {

}
