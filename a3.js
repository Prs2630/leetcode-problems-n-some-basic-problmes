//find factorial of number



// let input = 3
// const factorial = (n) => {
//     let output = 1;
//     if (n == 0 || n == 1) {
//         return output;
//     }
//     else {
//         for (var i = 1; i <= n; i++) {
//             output = output * i;
//         }
//         return output;
//     }
// }
// console.log(factorial(input))




let input=3
function findFactorial(n){
    let output=1
    if(n==0||n==1){
        return output
    }
    else{
        for(var i=1;i<=n;i++){
            output=output*i
        }
        return output
    }

}
console.log(findFactorial(input))

