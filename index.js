// Code your solutions in this file
const result = []
function writeCards(names, eventName){
  for (let name of names) {
    result.push(`Thank you, ${name}, for the wonderful ${enventName} gift.` )
  }
  return result
}

function countdown(num) {
  let countdown = num
  while (countdown >= 0) {
    console.log(countdown--)
  }
}
