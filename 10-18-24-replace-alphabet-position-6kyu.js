// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

function alphabetPosition(text) {
  let alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
  let numberArray= []
  for(let i = 0; i < text.length; i++){
    if(alphabet.includes(text[i].toLowerCase())){
      numberArray.push(alphabet.indexOf(text[i].toLowerCase()) + 1)
    }
  }
  return String(numberArray).split(',').join(' ')
}



console.log(alphabetPosition("The sunset sets at twelve o' clock."))
console.log("20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11")