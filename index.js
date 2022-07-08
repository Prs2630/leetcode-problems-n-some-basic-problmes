//reverse an array
let array=[1,2,3,4,5,6,7,8,"js","startup"]
 let reversearray=[]
for(let i=array.length-1;i>=0;i--){
    reversearray.push(array[i])
}
console.log(reversearray)





//find largest number in an array
// var array = [3, 6, 2, 56, 32, 5, 89, 32];
// var largest = 0;

// for (i = 0; i <= largest; i++) {
//     if (array > largest) {
//         var largest = array[i];
//     }
// }

// console.log(largest);






// var arr = [44, 55, 66, 78, 99, 100, 55, 88, 22]
// function highestvalue(arr) {
//     var temp = 0
//     for (var i = 0; i < arr.length; i++) {
//         // console.log(i)
//         for (var j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//             // console.log(temp)
//         }
//     }
//     console.log("highest number=", arr[arr.length - 1])
//     console.log("minimum number=", arr[0])
// }
// console.log(highestvalue(arr))





// //polymersism
// function Person(age,weight){

//     this.age=age;
//     this.weight=weight;
  
    
//   }
  
//   // Adding a method to the prototype
  
//   Person.prototype.getInfo=function(){
//     return `Name -Somthing ,Age - ${this.age} ,Weight-${this.weight}`
//   }
  
//   function Employee(age,weight,salary){
//       this.age=age;
//     this.weight=weight;
//     this.salary=salary;
    
//   }
//   Employee.prototype=new Person();
  
//   //const emp=Object.create(Person.prototype)
  
  
//   const emp=new Employee(27,77,89999);
  
  
  
//   Employee.prototype.getInfo=function(){
//     return `Name -Somthing ,Age - ${this.age} ,Weight-${this.weight} ,Salary - ${this.salary}`
//   }
  
//   console.log(emp.getInfo());

