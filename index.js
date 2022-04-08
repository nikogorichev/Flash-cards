const fs = require('fs').promises;
const readline = require('readline-sync');

async function quest() {
  console.log('Какое животное тебя интересует?')
  let arr = await fs.readdir('./topics')
  let newArr = arr.map((el, i) => `${i+1}) ${el.slice(0,-4)}`).join('\n')
  console.log(newArr)
  let num = readline.question('Выбирай тему:\n')
  let theme
  for (let i = 0; i < arr.length; i++) {
    if (num - 1 === i) {
      theme = await fs.readFile(`./topics/${arr[i]}`, 'utf-8')
    }
  }
  let count = 0
  let sub = theme.split('\n').filter(el => el !== '')
  for (let i = 0; i < sub.length; i += 2) {
    console.log(sub[i])
    let answer = readline.question('')
    if (answer.toLowerCase() === sub[i + 1].toLowerCase()) {
      console.log('\n👍\n')
      count++
    } else {
      console.log('\n🤮\n');
      count--
    }
  } console.log(`Тест завершен! Ваш счет: ${count}`)
}
quest()
