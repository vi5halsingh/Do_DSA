// question 4 . Write a program to print the invert tringle pattern

const pormpt = require("prompt-sync")();
const n = parseInt(pormpt("Enter the number of rows: "));

for (let i = 1 ; i <=n ; i++){
    for(let j = n - i +1  ; j >= 1 ; j--){
        process.stdout.write("* ")
    }
    console.log()
}