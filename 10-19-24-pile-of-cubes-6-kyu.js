// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of 
// n**3 , the cube above will have volume of (n−1)**3 and so on until the top which will have a volume of 1**3.

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

function findNb(m) {
  // your code
  // while loop to keep adding rows until all the volume is accounted for
  let volumeUnits = m
  let row = 1
  //let countVolumeUnits = 0
  while (volumeUnits > 0){
    volumeUnits -= row**3
    // if the volume is perfectly distibuted into rows return the number of row
    if(volumeUnits === 0){
      return row
    }
    row++
  }
  // if the volume is nor perfectly distributed into rows retrurn -1
  return (-1)
} 

console.log(findNb(91716553919377))

//Parameter is the total volume of all the cubes
//Returns the number of rows to build the building
//Examples
//findNb(225) --> 5
// findNb(1071225) --> 45
// findNb(91716553919377) --> -1