// Sliding window pattern

// write a function that accept an array of integers and a number n anf the function should calculate the maximum sum of n consecutive elemnts in an array

// for example --- maxSubarraySum([1,2,5,2,8,1,5],2) gives 10
function addto(arr,num){
    if(arr.length < num){
        return null;
    }
    let tempSum = 0;
    let maxSum = 0;
    for(let i = 0; i<num ; i++){
        maxSum += arr[i];
    }
      
tempSum = maxSum;
    for(let i = num;i<arr.length;i++){
           
        tempSum = tempSum - arr[i-num] + arr[i];  //8+arr[2]-arr[2-2] === 8+0-7
        maxSum = Math.max(tempSum,maxSum);
        console.log(maxSum)
    }
    return maxSum;
}
addto([7,1,0,4,5,6],2)