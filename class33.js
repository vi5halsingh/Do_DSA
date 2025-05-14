const pormpt = require("prompt-sync");

for(let  i = 1 ; i <= 5; i++){
    for(let j = 1; j <= 5; j++){
        process.stdout.write(" * ");
        if(j == 5){
            process.stdout.write("\n");
        }
        
    }
  
}