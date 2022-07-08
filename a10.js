//flatten deep nested an array
var array = [1,[2, 3],[4, 5, 6,[7, 8, 9]]]
const flatten = (arr) => {
    //if item is an number
    //if item is an array

    someNewArray=arr.reduce((acc, item) => {//accumulat is initial state ewhre ypu want to accumulate your data

        if (Array.isArray(item)) {//if it is an array
            acc= acc.concact(flatten(item))

        }


        else {
            acc.push(item)//if its number
        }
        return acc;

    }, [])


    return someNewArray

}
console.log(flatten(array))