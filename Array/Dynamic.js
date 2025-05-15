const prompt = require('prompt-sync')();
const size = Number(prompt('enter the size of Array : '))
let arr = new Array(size)

for(let i = 0 ; i<arr.length ; i++){
    arr[i] = Number(prompt(`enter the value of ${i}: `))
}

console.log(arr)