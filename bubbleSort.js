function bubbleSort(arr){
    let noswaps;
    for(let i=arr.length-1;i>=0;i--){
        noswaps = true;
        for(let j = 0;j<i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noswaps = false;
            }
        }
        if(noswaps) break;
    
    }
    return arr;
}