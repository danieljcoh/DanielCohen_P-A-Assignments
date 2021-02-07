//#1 pushFront

var myArr = [3,8,9];
var num = 7;

function pushFront(arr, value) {
    // move all values in array over
    for(let i = arr.length; i > 0; i--)
        arr[i] = arr[i-1]
    
    arr[0] = value;
}

//#2 popFront || Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
function popFront(arr) {

    const num = arr[0];
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i + 1];
        arr.length = arr.length - 1;
    }
    return num;
}


//#3 insertAt || Given an array, index, and additional value, insert the value into array at given index. Think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

function insertAt(arr, value, index){

    arr[index] = value;

    return arr;
}


//#4 removeAt || Given an array and an index into array, remove and return the array value at that index. Think of popFront(arr) as equivalent to removeAt(arr,0).

function removeAt(arr, index){

    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if (i != index){
            newArr.push(arr[i]);
        } else {
            continue;
        }
    }
    arr = newArr;

    return arr;

}

//#5 swapPairs || Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. 

function swapPairs(arr){

    if(arr.length % 2 == 0){
        for(var i = 0; i < arr.length; i +=2){
            var indx1;
            var indx2;
            
            indx1 = arr[i];
            indx2 = arr[i + 1];

            arr[i] = indx2;
            arr[i + 1] = indx1;
        }
    } else {
        for(var i = 0; i < arr.length-2; i+=2){
            var indx1;
            var indx2;
            
            indx1 = arr[i];
            indx2 = arr[i + 1];

            arr[i] = indx2;
            arr[i + 1] = indx1;
        }
    }

    return arr;
}


//#6 removeDuplicates || Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together.

function removeDuplicates(arr){

    var temp = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] != arr[i + 1]){
            temp.push(arr[i]);
        } else {
            continue;
        }
    }
    arr = temp;
    return arr;
}