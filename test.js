// 4. In your app.js file, declare a variable that's value is an array that has at least 10 values in it.

let ourArray = [1, 2, 3, "a", true, false, 4, 5, 6, "hello"];

// 5. Create a function that takes two arguments. The first argument should an array, the second argument can be any value. The function should use the push method on the array in the first argument, and push the value from the second argument. Finally this function should return the array that the push method was used on.
function myArray(arr, val) {
  arr.push(val);
  return arr;
}

// // Once you have created the function, call it inside a console.log method. For the two arguments, use your array from step 4 as the first value, and a value of your choosing for the second.
// // https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-push

console.log(myArray(array, 7));

// 6. Create a function that takes an array as an argument uses the splice method on that array and then returns that array. You may choose what values to use in the second and third parameter of the splice method.

function newArray(ourArray) {
  ourArray.splice(1, 2, "x", "y", 5);
  return ourArray;
}

// // Once you have created that function, call it inside a console.log() with the array from step 4 as your argument.
// // https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/remove-items-using-splice
console.log(newArray(ourArray));

// 7. Create a function that takes an array as an argument uses the /SLICE/ method on that array and assigns that value to a new variable. Your function should then return that variable. You may choose what values to use in the second and third parameter of the slice method.
function brandNewArray(ourArray) {
  let createdArray = ourArray.slice(1, 3);
  return createdArray;
}
let slicedArray = brandNewArray(ourArray);

// Once you have created that function, call it inside a console.log() with the array from step 4 as your argument.
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/copy-array-items-using-slice

console.log(slicedArray);
