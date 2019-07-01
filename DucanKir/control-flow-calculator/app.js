// Ask if he wants to display
// let userWantsToPlay = true
// wich operations
alert("Let's do some math!")

var operation = prompt('Choose operation (-, +, /, *)')
// 1st number
var first = Number(prompt('Choose first number'))
// 2nd number
var second = Number(prompt('Choose second number'))

if(operation === '+') {
  var result = first + second
}else if (operation === '-') {
  result = first - second
}else if (operation === '/') {
  result = first / second
} else {
  result = first * second
}

// results
alert(result)
// try again
// userWantsToPlay = confirm('Would you like to try again?')
