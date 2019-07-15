// Code your solutions in this file

// create a function to write thank you cards for an array of people with a customize message
function writeCards(arr,message) {
  const newArray = []
  for (let i=0; i < arr.length; i++) {
    newArray.push(`Thank you, ${arr[i]}, for the wonderful ${message} gift!`)
  }
  return newArray
}

// create a function to count down in the consolefor each number starting with a given number
function countdown(num) {
  while (num >= 0) {
    console.log(num--)
  }
}
