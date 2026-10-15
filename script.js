const displayOutput = document.querySelector('.display')
const buttons = document.querySelectorAll('button')
const specialOperators = ['%','=','+','-','/','*']
let outPut = ' '
const calculate = (btnValue) => {
  if (btnValue === '=' && outPut !== ' ') {
    try {
      outPut = eval(outPut.replace('%','/100'))
    } catch (e) {
      outPut = 'Error'
    }
  } else if (btnValue === 'AC') {
    outPut = ' '
  } else if (btnValue === 'DEL') {
    outPut = outPut.toString().slice(0, -1)
  } else {
    if (outPut === ' ' && specialOperators.includes(btnValue)) return
    outPut += btnValue
  }
  if (displayOutput) {
    if ('value' in displayOutput) {
      displayOutput.value = outPut
    } else {
      displayOutput.innerText = outPut
    }
  }
}
buttons.forEach(button => {
  button.addEventListener('click', (e) => calculate(e.target.dataset.value))
})
