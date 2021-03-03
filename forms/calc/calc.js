function Calculate (num1, num2) {
  return (num1) + (num2)
  }


let user_num1= prompt('Enter a number.')
let user_num2 = prompt('Enter a number')

summedNumbers = Calculate (parseInt(user_num1), parseInt(user_num2))
 
console.log(`The sum of ${user_num1} and ${user_num2} is ${summedNumbers}.`)


