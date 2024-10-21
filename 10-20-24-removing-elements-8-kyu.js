// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

function removeEveryOther(arr){b 
  const newArray = []
  for(let i = 0; i < arr.length; i++){
    if( i === 0 || i % 2 === 0){
      newArray.push(arr[i])
    }
  }
  return newArray
}

console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);