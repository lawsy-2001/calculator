'use strick';

const nine = document.getElementById('nine');
const eight = document.getElementById('eight');
const seven = document.getElementById('seven');
const six = document.getElementById('six');
const five = document.getElementById('five');
const four = document.getElementById('four');
const three = document.getElementById('three');
const two = document.getElementById('two');
const one = document.getElementById('one');
const zero = document.getElementById('zero');
const dot = document.querySelector('#dot');

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const times = document.getElementById('times');
const divideBtn = document.getElementById('divide');

const clear = document.getElementById('clear');
const deleteBtn = document.querySelector('#delete');
const equals = document.getElementById('equals');

const displayText = document.getElementById('displayBox');
displayText.innerHTML = '0';

let firstNum = '';
let secondNum = '';
let operator = '';
let currentDisplay = '';

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) return 'noops!';
  return num1 / num2;
}

function operate(num1, num2, operator) {
  if (operator === '+') {
    return add(num1, num2);
  }
  if (operator === '-') {
    return subtract(num1, num2);
  }
  if (operator === '*') {
    return multiply(num1, num2);
  }
  if (operator === '/') {
    return divide(num1, num2);
  }
}

function numberClick(event) {
  currentDisplay += event.target.value;
  displayText.innerHTML = currentDisplay;
}

function dotClick(event) {
  if (currentDisplay.includes('.')) return;
  numberClick(event);
}

function operatorClick(event) {
  if (operator !== '') {
    equalsClick();
  }
  operator = event.target.value;
  currentDisplay === '' ? (firstNum = '0') : (firstNum = currentDisplay);
  displayText.innerHTML = firstNum;
  currentDisplay = '';
}

function clearClick() {
  firstNum = '';
  secondNum = '';
  operator = '';
  currentDisplay = '';
  displayText.innerHTML = '0';
}

function delClick() {
  currentDisplay = currentDisplay.slice(0, -1);
  displayText.innerHTML = currentDisplay;
}

function equalsClick() {
  if (firstNum === '' || operator === '') return;
  secondNum = currentDisplay;
  const answer = operate(+firstNum, +secondNum, operator);
  answer.toString().length > 9
    ? (currentDisplay = answer.toString().substring(0, 10))
    : (currentDisplay = answer);
  displayText.innerHTML = currentDisplay;
  operator = '';
  secondNum = '';
  firstNum = '';
}

nine.addEventListener('click', numberClick);
eight.addEventListener('click', numberClick);
seven.addEventListener('click', numberClick);
six.addEventListener('click', numberClick);
five.addEventListener('click', numberClick);
four.addEventListener('click', numberClick);
three.addEventListener('click', numberClick);
two.addEventListener('click', numberClick);
one.addEventListener('click', numberClick);
zero.addEventListener('click', numberClick);
dot.addEventListener('click', dotClick);

plus.addEventListener('click', operatorClick);
minus.addEventListener('click', operatorClick);
times.addEventListener('click', operatorClick);
divideBtn.addEventListener('click', operatorClick);

clear.addEventListener('click', clearClick);
deleteBtn.addEventListener('click', delClick);
equals.addEventListener('click', equalsClick);

window.onkeydown = (e) => {
  if (e.key === '9') nine.click();
  if (e.key === '8') eight.click();
  if (e.key === '7') seven.click();
  if (e.key === '6') six.click();
  if (e.key === '5') five.click();
  if (e.key === '4') four.click();
  if (e.key === '3') three.click();
  if (e.key === '2') two.click();
  if (e.key === '1') one.click();
  if (e.key === '0') zero.click();
  if (e.key === '.') dot.click();
  if (e.key === '+') plus.click();
  if (e.key === '-') minus.click();
  if (e.key === '*') times.click();
  if (e.key === 'x') times.click();
  if (e.key === '/') divideBtn.click();
  if (e.key === 'Enter') equals.click();
  if (e.key === 'Backspace') deleteBtn.click();
  if (e.key === 'Delete') clear.click();
};
