// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  for (let i = 0; i < A.length; i++){
    let filteredArray = A.filter(item => item === A[i])
    if (filteredArray.length % 2){
      return A[i]
    }
    filteredArray = []
  }
  return 0;
}

// console.log(findOdd([7]), 7);
console.log(findOdd([0]), 0);
console.log(findOdd([1,1,2]), 2);
console.log(findOdd([0,1,0,1,0]), 0);
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]), 4);