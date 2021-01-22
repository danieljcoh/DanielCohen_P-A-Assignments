
var arr1 = [4,2,1,3,5]
//var arr1 = [6,4,5]
var min = arr1[0]
var max = arr1[0]
var idxMin = 0
var idxMax = 0

for(var i = 0; i < arr1.length; i++)
{
    if(arr1[i] < min){
        min = arr1[i]
        idxMin = i
    }
}

if(arr1[0] != min){
    var tempNum = arr1[0]
}

arr1[0] = min
arr1[idxMin] = tempNum

