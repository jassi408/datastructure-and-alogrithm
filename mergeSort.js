function merge(arr1,arr2){
    let result  = [];
    let i = 0;
    let j = 0;
    while(j < arr2.length && i < arr1.length){
        
        if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        }
        else{
            result.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length ){
            result.push(arr1[i]);
            i++;
        }
     while(j < arr2.length){
            result.push(arr2[j]);
            j++;
        }
    return result;
}
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left,right);
}
mergeSort([9,4,6,7,2,3,4,5,8,4])