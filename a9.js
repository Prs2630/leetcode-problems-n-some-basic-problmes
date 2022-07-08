//find duplicates from array
const findDuplicated=(arr)=>{
    let sortedArray=arr.slice().sort()
    let result=[]
    for(let i=0;i<sortedArray.length;i++){
        if(sortedArray[i+1]===sortedArray[i]){
            result.push(sortedArray[i])
        }
    }
    return result;
}
let arr=[2,3,4,5,2,3,4]
console.log(findDuplicated(arr))