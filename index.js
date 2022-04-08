const fs = require('fs').promises;
const readline = require('readline-sync');

async function quest() {
  console.log('Какое животное тебя интересует?')
  let arr = await fs.readdir('./topics')
  let newArr = arr.map((el, i) => `${i+1}) ${el.slice(0,-4)}`).join('\n')
  console.log(newArr)
}
