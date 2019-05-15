// Code your solutions in this file
var writeCards = function(arr, event){
    let finalArr = []
    for(let i = 0; i<arr.length; i++){
        finalArr.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`)
    }
    return finalArr
}

var countdown = function(num){
    for(let i = -1; i < num; num--)
    console.log(num)
}