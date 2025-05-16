let arr = [ 1,5,3,2,6]

for(let i = 0; i<arr.length -1 ; i++){
    for(let j = 0 ; j<arr.length  ;j++){
        if(arr[j] > arr[j+1]){
            temp = arr[j]
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
console.log(arr)