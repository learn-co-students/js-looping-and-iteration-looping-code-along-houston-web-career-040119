// Code your solutions in this file


function writeCards( name, event ) {
    let thankYouCards = []
    for ( let i = 0; i < name.length; i++ ) {
      thankYouCards.push( `Thank you, ${name[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }
  
  function countdown( countdown ) {
    while ( countdown > 0 ) {
      console.log( countdown );
      countdown -= 1;
    }
    console.log( countdown );
  }
  
