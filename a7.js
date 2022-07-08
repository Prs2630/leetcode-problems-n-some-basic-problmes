//return longest word
// function longestWord(sen){
//     let arr=sen.match(/[a-z]+/gi)
//     let sorted=arr.sort(function(a,b){
//         return b.length-a.length
        
//     })
//     // console.log(sorted)
//     sen=sorted[0]
//     return sen;
// }
// console.log(longestWord("fun&!! Time "))



function longestWord(sen){
    let arr=sen.match(/[a-z]+/gi)
    let sorted=arr.sort(function(a,b){
        return b.length-a.length
    })
    console.log(sorted)
    sen=sorted[0]
    return sen
}
 console.log(longestWord("fun&!! Time "))