function hasTargetSum(array, target) {
  for(let i = 0; i < array.length; i++)  {
  const complement = target - array[i]
  for( let j = i + 1; j < array.length; j++) {
    if (array[j] === complement) return true
  }
  } return false;
}

/* 
  Write the Big O time complexity of your function here



*/

/* 
  Add your pseudocode here

  //
  - iterate through each number of the array.
  - for the current number, identify a complement that adds to the target (complement = target  - num)
  - iterate through the rest of the array & check to see if any number is the complement. if yes, return true. if no, return false. 



*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 8], 4));
}

module.exports = hasTargetSum;


// Write a function that checks if 2 numbers in an array add up to the target number. For each number, check if there's another number that will add up to the target.