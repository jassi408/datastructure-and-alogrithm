// frequency counter pattern

// Frequency Counter -- given two strings write a function to determine if the second string is anagram of first. Such as cinema and iceman


function same(first,second){

    // check if the length is not same of both strings then return false.

    if(first.length !== second.length){
        return false;
    }  
    // created an object to count the number of times the letter came.
    let obj = {};
    for(let i = 0 ;i<first.length;i++){
        key = first[i];
        if (obj[key] === undefined){
            obj[key] = 1;
        }
        else{
            obj[key]++;
        }
    }

    // created another obj to count the number of times the letter came

    let obj1 = {};
    for(let i = 0 ;i<second.length;i++){
        key = second[i];
        if (obj1[key] === undefined){
            obj1[key] = 1;
        }
        else{
            obj1[key]++;
        }
    }
    // console.log(obj);
    // console.log(obj1);
    // check if first str has the same number of times a letter coming in str2

    for(let i = 0; i<first.length; i++){
        key = second[i];
        if(!(key in obj)){
            return false;
        }
        if(obj[key] !== obj1[key]){
            return false;
        }
        return true;
    }
    
 }
 same('ab','ab');

//  -------------------------------------------------------

//  second method

function same(first,second){
    if(first.length !== second.length){
        return false;
    }
   let obj = {};
   for(let i =0 ; i<first.length ; i++){
       let letter = first[i];
       obj[letter] ? obj[letter]++ : obj[letter] = 1;
   } 
   console.log(obj);
   for(let i =0; i<second.length ; i++){
       let letter = second[i];
       if(!obj[letter]){
           return false;
       }
       else{
           obj[letter]--;
       }

       return true;
   }
console.log(obj);
}

same('hate','athe');