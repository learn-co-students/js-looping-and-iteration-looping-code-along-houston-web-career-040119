// Code your solutions in this file
function writeCards(names,eventname) {
  let results = new Array(names.length);
  for( let i = 0; i < names.length; i++ ) {
    results[i] = `Thank you, ${names[i]}, for the wonderful ${eventname} gift!`
  }
  return results;
}

function countdown(n) {
  let i = n;
  while (i >= 0) {
    console.log(i);
    i--;
  }
}
