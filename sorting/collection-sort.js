const prompt = require('prompt-sync')()
const size = Number(prompt("enter the size of array : "))
let arr = new Array(size)

for(let i = 0 ; i< arr.length ; i++){
    arr[i] = Number(prompt(`enter the vlaue of index ${i} : `))
}

let temp = arr[0];
for(let i = 0 ; i< arr.length -1 ; i++){
    let small = i;
    for(let j = i+1 ; j < arr.length  ; j++){
        if(arr[j] < arr[small] ){
        small = j
        }
    }
if(arr[small] != arr[i]){
    let temp  = arr[i];
    arr[i]   = arr[small];
    arr[small] = temp;
}
   
}
console.log(arr)