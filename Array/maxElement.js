let arr = [2,4,12,5,8,14,25]
let max = arr[0]
for(let i = 1 ; i<arr.length ; i++){
 if(arr[i] > max){
    max = arr[i]
 }
}
console.log("max ele is : ", max)