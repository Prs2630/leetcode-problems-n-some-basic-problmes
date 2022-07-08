//find largetst n smallest element from array
const arr=[1,2,3,4,5,6,7]
function getHighest(arr){
    let num=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<num){
            num=arr[i]
        }
    }
    return num
}
console.log(getHighest(arr))