// Write a recursive function with given an array of strings , capatilize the first letter of each string in array.
function capitalizeFirst (givenarray) {
    let result = [];
    function capital(arr){
        if(arr.length === 0) return result;
        if(arr.length > 0){
         result.push(arr[0][0].toUpperCase() + arr[0].slice(1,arr[0].length));
         return  capital(arr.splice(1));
        }
    }
    capital(givenarray);
    return result;
}

capitalizeFirst(['car','taco','banana']);
