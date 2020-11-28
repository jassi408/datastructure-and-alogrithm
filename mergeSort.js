function mergeSort(arr1,arr2){
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
            result.push(arr2[j]);
            j++;
        }
     while(j < arr2.length){
            result.push(arr1[i]);
            i++;
        }
    return result;
}
mergeSort([1,10,50,101],[2,14,99,100]);