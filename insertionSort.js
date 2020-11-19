insertionSort([4,6,3,7,9]);

function insertionSort(arr){
    for(let i =1;i<arr.length;i++){
        for(let j =i-1;j>=0;j--){
            if(arr[i]>arr[j]) break;
            if(arr[i] <arr[j]){
                let temp = arr[i];
                arr[i]= arr[j];
                arr[j]= temp;
                i = j;
            }
        }
        
    }
    return arr;
}