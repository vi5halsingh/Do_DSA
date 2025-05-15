// Q . print X :

// *          *
//   *      *
//     *  *
//       *
//     *  *
//   *      *
// *          *

// input should be odd number 


const prompt = require('prompt-sync')();
const n = Number(prompt("enter the no. of rows:"))

for(let i=1 ; i<= n ; i++){
   for(let j=1 ; j <= n ; j++){
    if(i===j || i+j == n+1){
        process.stdout.write("*")
    }else{
        process.stdout.write("  ")
   }
   }
    console.log()
}