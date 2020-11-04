// given an array of integers in which two element appear exactly once and all other element appear twice. find two element that appear once.
// for example --- appearOnce([2,4,6,8,10,2,6,10]) return 4 and 8

// frequency Counter pattern

function appearOnce(arr){
    let result = [];
    if(arr.length <= 1){
        return null;
    }
    let obj = {};
    for(let i = 0; i < arr.length ; i++){
        let num = arr[i];
        obj[num] ? obj[num]++ : obj[num] = 1;
     }
     console.log(obj);

     for(let i =0 ; i< arr.length ; i++){
         let num = arr[i];
         if(obj[num] === 1){
             result.push(num);
         }
     }
     return result;
}

appearOnce([2,4,6,8,10,2,6,10]);

