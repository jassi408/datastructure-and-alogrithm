// given an array of integers and a number, write  afunction which finds the maximum sum of subarray with the length of the number passed to the function.
// Note that a subarray must consist of consecutive elements from the original array
// for example --- maxSubarraySum([100,200,300,400],2) returns 700

function maxSumSubarray(arr,num){
    let maxSum = 0;
    let tempSum = 0;
    for(let i =0 ; i<num ; i++){
        tempSum +=arr[i];
    }
    maxSum = tempSum;
    for(let i = num; i<arr.length;i++){
        tempSum = tempSum - arr[i-num] + arr[i];
        maxSum = Math.max(tempSum,maxSum);
    }
    return maxSum;
}

maxSumSubarray([9,5,6,2,3,7],4)