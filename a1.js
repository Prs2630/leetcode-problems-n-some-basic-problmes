//remove duplicates from array
var arr = [2, 3, 4, 5, 3, 2, 8, 9, 1, 1, "apple", "apple", 'mango']
function removeDuplicates(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(i!==j){
                if(arr[i]===arr[j]){
                    arr.splice(j,1)
                }
            }
        }
    }
    return arr
}

let res = removeDuplicates(arr)
console.log(res)