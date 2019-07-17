// Code your solutions in this file
function writeCards(array,name){
var thanks=[]

for(var i = 0;i<array.length;i++){
    thanks.push(`Thank you, ${array[i]}, for the wonderful ${name} gift!`)
}
return thanks
}

function countdown(num){
    while(num>=0){
        console.log(num)
        num--
    }
}