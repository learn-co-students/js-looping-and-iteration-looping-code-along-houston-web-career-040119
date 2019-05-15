// Code your solutions in this file
const nameArray = ["Ada", "Brendan", "Ali"]
const event = "birthday"

function writeCards(nameArray, event){
    let thankYouCard = []
    for (let i = 0; i < nameArray.length; i++ ){
        thankYouCard.push(`Thank you, ${nameArray[i]}, for the wonderful ${event} gift!`)
    }  
    return thankYouCard
}

function countdown(countdown){
    while (countdown > 0){
        console.log(countdown)
        countdown -= 1;
    }
    console.log(countdown);
  }
