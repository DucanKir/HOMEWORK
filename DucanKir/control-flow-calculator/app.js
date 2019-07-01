// Ask if he wants to display

// wich operations
alert("Let's do some math!")

let userWantsToPlay = true
while(userWantsToPlay) {

  var operation = prompt('Choose operation: (A)addition, (S)substraction, (D)division, (M)multiplication, (R)square root or (P)power')

  if(operation === 'R') {
    var squareRoot = Number(prompt('Choose a number'))
    while(isNaN(squareRoot) === true) {
      squareRoot = Number(prompt('Not a number.Choose a number'))
      if(isNaN(squareRoot) === false) {
        break
      }
    }
    result = Math.sqrt(squareRoot)
    alert(result)
    userWantsToPlay = confirm('Would you like to try again?')
  }
  // 1st number
  else {
    var first = Number(prompt('Choose a first number'))
    while(isNaN(first) === true) {
      first = Number(prompt('Not a number.Choose a number'))
      if(isNaN(first) === false) {
        break
      }
    }
    // 2nd number
    var second = Number(prompt('Choose a second number'))
    while(isNaN(second) === true) {
      second = Number(prompt('Not a number.Choose a number'))
      if(isNaN(second) === false) {
        break
      }
    }
    if(operation === 'A') {
      var result = first + second
    }else if (operation === 'S') {
      result = first - second
    }else if (operation === 'D') {
      result = first / second
    }else if (operation === 'P') {
      result = Math.pow(first, second)
    }else if (operation === 'M'){
      result = first * second
    }

    // results
    alert('The result is '+result)
    // try again
    userWantsToPlay = confirm('Would you like to try again?')
  }
}
