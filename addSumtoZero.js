// Multiple pointer pattern
// write a function that accept a sorted array of integers and it should return first pair that reurn zero. 


function sumZero(arr){
    let left = 0;
    let right = arr.length-1;
    while(left<right){
        if(arr[left]+arr[right] === 0){
            return [arr[left], arr[right]];
        }else if(arr[left] + arr[right] < 0){
            left++;
        }else{
            right--;
        }
    }
}
sumZero([-2,-1,-1,0,1,5])