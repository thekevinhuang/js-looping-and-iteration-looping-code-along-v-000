// Code your solutions in this file
function printBadges(names) {
  for (let i = 1; i <= names.length; i++) {
    console.log(`Welcome ${names[i-1]}! You are employee #${i}.`)
  }
  return names
}

function tailsNeverFails() {
  function flipCoin() {
    return Math.random() >=.5 ? "Tails" : "Heads"
  }

  let counter = 0

  while(flipCoin() === "Tails") {
    counter++
  }
  return `You got ${counter} tails in a row!`
}
