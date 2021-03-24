/*
Coding in function pickIt, function accept 1 parameter:arr, it's a 
number array, we need traverse arr by using for loop, if element is 
odd number, push it to array odd, if it's a even number, push it to array even. 
*/
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function pickIt(arr) {
          let oddArr = [], evenArr = [];

          for(let i = 0; i < arr.length; i++){
                    if(arr[i] % 2 == 0) {
                              evenArr.push(arr[i]);
                    }else {
                              oddArr.push(arr[i]);
                    }
          }

          return [oddArr, evenArr];

}

console.log(pickIt(num));