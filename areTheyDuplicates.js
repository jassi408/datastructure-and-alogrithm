// Write a function that accept a variable number of arguments and check if they are duplicates among the arguments passed in.
// For Example : areTheyDuplicates(1,2,3) returns false

// frequency Counter

function areThereDuplicates(...nums) {
    // good luck. (supply any arguments you deem necessary.)
    
  let obj = {};
  let arr = [];
  for(let i = 0; i<nums.length ; i++){
      let number = nums[i];
      obj[number] ? obj[number]++ : obj[number] = 1;
  }
  for(let i = 0; i<nums.length ; i++){
      let key = nums[i];
      if(obj[key]>1){
         arr.push(obj[key]);
      }
  }
  console.log(obj);
  console.log(arr);
  if(arr.length === 0){
      return false;
  }
  else{
      return true;
  }
  
  
  }

//   Multiple Pointer

function areTheyDuplicate(...nums){
    nums.sort((a,b) => a-b);
//     console.log(nums);
    let i =0;
    let j =1;
    while(j<nums.length){
       
       if(nums[i] === nums[j]){
           return true;
       }
       else{
           i++;
           j++;
       }
    }
    return false;
}