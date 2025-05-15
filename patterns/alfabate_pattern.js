// Q. print the following pattern
//  A 
// A B
// A B C
// A B C D
// A B C D E
// A B C D E F
// A B C D E F G

const prompt = require('prompt-sync')();
const n  = Number(prompt("enter the value of  rows: "))
for(let i= 0 ; i <= n ; i++){
    const temp = 65; 
    for(let j = temp ; j<= temp+i ; j++){
        process.stdout.write(String.fromCharCode(j)+" ")
    }
    console.log()
}