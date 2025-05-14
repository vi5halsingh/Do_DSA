// question 3 . Write a program to print the following pattern:
// 1
// 123
// 1234
// 12345
const pormpt = require("prompt-sync")();
const n = parseInt(pormpt("Enter the number of rows: "));


for(let i = 1 ; i <= n ; i++ ){
        for( let j =1 ; j<=i; j++){
                process.stdout.write(j + " ");
            }
            console.log(" ");
        }