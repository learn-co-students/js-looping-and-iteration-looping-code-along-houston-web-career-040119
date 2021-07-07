// Code your solutions in this file
function writeCards( array, event){
  let thanks = [];
  for (let i = 0; i < array.length; i++){
    thanks.push( `Thank you, ${array[i]}, for the wonderful ${event} gift!` )
  }
  return thanks
}


// function writeCards( namesArray, event ) {
//   let thankYouCards = []
//   for ( let i = 0; i < namesArray.length; i++ ) {
//     thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
//   }
//   return thankYouCards
// }


//////////////////////

function countdown( countdown ) {// countdown is a number
  while ( countdown > 0 ) {// condition
    console.log( countdown );//print the countdown

    countdown -= 1;// action if condition true
  }
  console.log( countdown );
}
