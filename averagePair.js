// write a function that accept a sorted array of intergers and determine if there is a pair of values in the array where the average of the pair equals the target average.
// averagePair([1,2,3],2.5) returns true

// Multiple pointer

function averagePair(arr,target){
    // add whatever parameters you deem necessary - good luck!
    let start = 0;
      let end = arr.length - 1;
  
      while(start<end){
          let avg = (arr[start] + arr[end])/2;
          if(avg === target){
              // console.log(arr[start],arr[end],start,end);
              return true;
          }
          else if(avg > target){
              end--;
          }
          else{
              start++;
          }
      }
      return false;
  }