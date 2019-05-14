// Code your solutions in this file

function writeCards(names,event) {
    let card = new Array(names.length);
    for( let i = 0; i < names.length; i++ ) {
      card[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
    }
    return card;
  }
  
  function countdown(n) {
    let i = n;
    while (i >= 0) {
      console.log(i);
      i--;
    }
  }