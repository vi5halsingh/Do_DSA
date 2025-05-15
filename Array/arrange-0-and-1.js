// we have to arrenge 0's into left side and 1's into right  side

let arr =[1,0,1,0,0,1]
let i = 0 , j=0 ;
while(i <= arr.length -1 ) {
    if(arr[i] == 0){
        let temp = arr[j]
        arr[j] = arr[i];
        arr[i]=temp;
        j++
    }
    i++;
  }

console.log(arr)