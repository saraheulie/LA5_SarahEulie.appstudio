let quoteString = "Failure is simply the opportunity to begin again this time more intelligently."

console.log(`Upper case string is: ${quoteString.toUpperCase()}`)
alert(`Upper case string is: ${quoteString.toUpperCase()}`)

let authorString = "- Henry Ford"

let completeString = quoteString.concat(authorString)

console.log(`Concatenated string is: ${completeString}`)
alert(`Concatenated string is: ${quoteString.concat(authorString)}`)

let found= completeString.includes("Henry")

if (found == True) {
  console.log(`Henry was in completeString`);
  alert(`Henry was in completeString`);
} else {
  console.log(`Henry was NOT in completeString`);
  alert(`Henry was NOT in completeString`);
  }
  