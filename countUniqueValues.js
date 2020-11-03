// Multiple pointer pattern
// write a function that accept asorted array and counts the unique value in array.
// for ex : uniqueValue([1,1,1,2])  gives 2


// first method
// ------------------------------------------------

function uniqueValue(arr){
    let counter = 0;
    let obj = {};
    for(let i = 0; i<arr.length ; i++){
        num = arr[i];
       obj[num] ? obj[num]++ : obj[num]=1;
    }

  
 let arr1 = (Object.keys(obj));
   return arr1.length;
}



// second method
// -----------------------------------------------------

function uniqueValue(arr){
    let left = 0;
    let right = 1;
    let arr1 = [];
//     if arr[left] = arr[right] then right++ then repeat that but if arr[right] !== arr[left] then push left to another arr
// and move left as right and right AS right ++
    while(right < arr.length){
        if(arr[left] !== arr[right]){
            arr1.push(arr[left]);
            left = right;
            right++;

        }

        else{
            right++;
        }
        
    }
    if(arr[arr.length-1] === arr1[arr1.length-1]){
        return arr1.length;
    }else{
        arr1.push(arr[arr.length-1]);
        return arr1.length;
    } 
}


uniqueValue([1,1,1,2,2,3,3,4]);



// third method
// --------------------------------------------

function uniqueValue(arr){
    let i = 0;
    for(let j =1; j<arr.length;j++){
        if(arr[i]!==arr[j]){
            i++;
            arr[i]=arr[j];
         
        }
       
    }
   return(i+1);
}

[1,2,3,4,5]