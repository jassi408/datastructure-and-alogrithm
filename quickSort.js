function pivot(arr,start,end){
    let pivotNumber = arr[start];
    let pivotIndex = 1;
   
    for(let i =start+1;i<end+1;i++){
        if(pivotNumber > arr[i]){
            let temp = arr[pivotIndex];
            arr[pivotIndex] = arr[i];
            arr[i] = temp;
            pivotIndex++;
        }
        
    }
    let temp = arr[pivotIndex];
    arr[pivotIndex] = pivotNumber;
    arr[0] = temp;
    return pivotIndex;
}
pivot([5,9,3,2,7,6,8],0,6)

function quickSort(arr,left = 0,right = arr.length-1){
   if(left<right){
       let pivotIndex = pivot(arr,left,right)
    //    left
       quickSort(arr,left,pivotIndex-1);
    //    right
    quickSort(arr,pivotIndex+1,right);
   }
   return arr;
}