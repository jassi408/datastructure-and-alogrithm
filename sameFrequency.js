// Frequency Counter pattern

// write a function that accept two integers and find out if the numbers has same frequency of digits.
// for example --- sameFrequency(182,281) return true

function sameFrequency(num1,num2){

    // created array from integers
    let arr1 = Array.from(num1.toString());
    let arr2 = Array.from(num2.toString());

    if(arr1.length !== arr2.length){
        return false;
    }

    let counter1 = {};
    let counter2 = {};
    // created objects of each array to calculate the number of times a number occur in each array

    for(let i = 0; i<arr1.length ; i++){
        let n =arr1[i]
        counter1[n] ? counter1[n]++ : counter1[n] = 1;
    }
    for(let i = 0; i<arr2.length ; i++){
        let n =arr2[i]
        counter2[n] ? counter2[n]++ : counter2[n] = 1;
    }
//     console.log(counter1);
//     console.log(counter2);

// check if the elements are occuring same number of times

    for(let i =0; i < arr1.length ; i++){
        key = arr1[i];
        
//         console.log(key in counter2);

        if((key in counter2)){
              return false;

        } 
        if(counter1[key] !== counter2[key]){
            return false;
        }

        return true;
        
}

}
sameFrequency(11,11);