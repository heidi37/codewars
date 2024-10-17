// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

function findUniq(arr) {
  console.log(arr)
  const compareArray = []
  const removedArray = []
  for (let ele of arr){
    if (compareArray.indexOf(ele) === -1 && removedArray.indexOf(ele) === -1){
      compareArray.push(ele)
    } else if(compareArray.indexOf(ele) !== -1) {
      removedArray.push(ele)
      compareArray.splice(compareArray.indexOf(ele), 1)
    }
  }
  return compareArray[0]
}

//console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2)
console.log(findUniq([8, 8, 8, 8, 8, 8, 8, 7]), 7)