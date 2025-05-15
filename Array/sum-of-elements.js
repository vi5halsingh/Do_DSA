const prompt = require('prompt-sync')();
const size = Number(prompt('enter the size of Array : '))
let arr = new Array(size)
let sum = 0

for(let i = 0 ; i<arr.length ; i++){
    arr[i] = Number(prompt(`enter the value of ${i}: `))
}
for(let i = 0 ; i<arr.length ; i++){
   sum =sum + arr[i]
}
console.log(arr)
console.log('sum of an array : ' , sum)