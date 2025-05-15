let arr = [2,3,4,5,6]
let i = 0 ;
temp = arr[0] ;
while(i < arr.length){
  arr[i] = arr[i+1];
  i++
}
arr[arr.length-1] = temp
console.log(arr)

//perform the right notation just opposite of it do it from last index . umm wait let me do that as well 😀

let arr2 = [2,3,4,5,6]
let j = arr2.length-1 ;
temp = arr2[arr2.length -1] ;
while(j >= 0){
  arr2[j] = arr2[j-1];
  j--;
}
arr2[0] = temp
console.log(arr2)
