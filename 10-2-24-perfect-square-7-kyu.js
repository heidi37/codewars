//Given an integral number, determine if it's a square number

var isSquare = function(n){
  for (let i = 0; i <= n; i++){
    if(i * i === n) {
      return true
    }
  }
  return false;
}


console.log(isSquare(25))
console.log(isSquare(1))
console.log(isSquare(0))