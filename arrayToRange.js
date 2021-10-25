/*   Your task is to take arrays of numbers and compress them into ranges.

The numbers in the array are mostly consecutive. If you convert them as ranges, it will save a lot of space. You should write a function that will convert an array of numbers into a string. A range, or series of consecutive numbers, will be represented as two numbers separated by an underscore, a range of one just by the number its self and multiple ranges separated by commas.

For example,
The numbers 5, 6, 7, 8 and 9 would be displayed as "5_9"
The number 6 would just be "6"
The numbers 3,4,5,6,9 would be "3_6,9"

Using the above system, you should write two functions:
toRange - convert an array of numbers to a range string
toArray - convert a range string back to an array

Warnings
The numbers could arrive all jumbled up so you'll need to sort them Sometimes the same number may appear more than once, duplicates should be discarded.

Edge cases
An empty array should become an empty string if passed to toRange and vise versa for the toArray function. Also, ranges of 2 digits will take the same space whether they are represented as a sequence or a range. I.e. "5,6,8,9".length === "5_6,8_9".length so there will be no compression, but represent them as a range anyway for consistency.

Good luck!*/

function arrayToRange(arr){
  function compareNumbers(a, b) {
    return a - b;
  };

  function sortNum(arr){

    arr.sort(compareNumbers);

  };
  return   arr.sort(compareNumbers);
};

function filterArr(arr){
  filteredarr = [];
  for(let i = 0; i < arr.length; ++i) {
    if (arr[i] !== arr[i+1])
       filteredarr.push(arr[i])


  }
 return filteredarr
}
 const getConsecutiveCount = (arr, index) => {
   let count = 0;
   for (let i = index; i < arr.length - 1; ++i){
     if (arr[i] + 1 === arr[i + 1]) {
       count++
     }


   }
   return count
 }
 console.log(getConsecutiveCount([1, 2, 3, 4, 8, 7], 1))

 const replaceFirstConsecutive = (arr) => {
   for (let i = 0; i < arr.length; ++i){
     let count = getConsecutiveCount(arr, i);
     if(count){
       return[...arr.slice(0, i), `${arr[i]} - ${arr[1 + count]}`, ...arr.slice(i + count)]
     }
   }
   return arr
 }


// function consecutiveNum(arr){
//   for(let i = 0; i< arr.length - 1; ++i){
//     if( arr[i] + 1 !== arr[i + 1] ){
//        return arr[i+1]
//     }
//   }
//   return null
// }

//console.log(consecutiveNum([1]))
//console.log(consecutiveNum([1, 2, 4]))

//  console.log(filterArr((arrayToRange([1, 4, 3, 8, 2, 3, 8, 7]))))
//  console.log(filterArr(arrayToRange([1, 3, 3, 6 ,9, 1])));
//
// arr1 = filterArr((arrayToRange([1, 4, 3, 8, 2, 3, 8, 7])));
// arr2 = filterArr(arrayToRange([1, 3, 3, 6 ,9, 1]));
//
// console.log(consecutiveNum(arr1))
// console.log(consecutiveNum(arr2))
//
// function arrRange(arr){
//   newarr = [];
//   rangearr = [];
//   for(let i = 0; i < arr.length - 1; ++i){
//
//     if (arr[i] +1 !== arr[i + 1]) {
//       //newarr.push(arr[i])
//       newarr.push(arr[i+1])
//     }
//     if (arr[i]+1 === arr[i+1]){
//       rangearr.push(arr[i])
//       rangearr.push(arr[i + 1])
//     }
//   }
//
//     return [newarr, rangearr]
// }
// arr = [1, 2, 3, 5, 7, 8 ,9, 11]
//
// console.log[arrRange(arr)]
//finalarr = arrRange(arr1[1])
 //console.log(finalarr)

//console.log(arrRange([0, 1, 2, 3, 4, 5]));
//console.log(arrRange([-3, -2, -1, 0, 1, 2]));
//console.log(arrRange([1, 3]));
//console.log(arrRange([1, 2, 3, 5, 7, 8 ,9, 11]));
//console.log(arrRange([1]));
//console.log(arrRange([2]));
