// Code your solutions in this file
function writeCards(namesArray, eventName){
   let returnArray = []
for (let index = 0; index < namesArray.length; index++) {
   returnArray.push(`Thank you, ${namesArray[index]}, for the wonderful ${eventName} gift!`) 

}
return returnArray
}

function countdown(integer)
{
while (integer >= 0) {
console.log(integer)
integer--
}
}

console.log(countdown(20))