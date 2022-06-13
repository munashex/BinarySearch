function binarySearch(arr, target){
    let start = 0
    let end = arr.length - 1

    while(start <= end) {
        let middle = Math.floor((start + end) / 2)

        if(arr[middle] > target) {
            //search the half left
         end  = middle - 1
        }else if(arr[middle] < target){
            //search the half right
         start = middle + 1
        }else if(arr[middle] === target){
            return middle
        }
    }
    //target not found
    return  -1 
}

let asnswer = binarySearch([1, 2, 3,4, 5], 2)
//console.log(asnswer)



function linearSearch(arr, target) {
    for(let i in arr) {
        if( arr[i] === target) return i
    }
    return -1
}

let answer = linearSearch([1, 5, 8, 2, 0], 0)
console.log(answer)