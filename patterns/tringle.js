// question 2 . Write a program to print the following pattern:

const pormpt = require("prompt-sync")();
const n = parseInt(pormpt("Enter the number of rows: "));

for(let i = 0 ; i <= n ; i++ ){
        for( let j =0 ; j<=i; j++){
                process.stdout.write(" * ");
            }
            console.log(" ");
        }