// selection sort

function selectionSort(arr){
    for(let j =0 ; j<arr.length;j++){
    let minValue = arr[j];
    let index = j;
    for(let i =j+1; i<arr.length;i++){
        if(minValue>arr[i]){
             minValue = arr[i];
             index = i;
         }
   }
   if(index !== j){
     let temp = arr[j];
     arr[j] = minValue;
     arr[index] = temp;  
   }
   
}
return arr;
}
selectionSort([1,2,5,4,6,3,7,9]);
