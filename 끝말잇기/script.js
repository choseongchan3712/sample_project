let number = parseInt(prompt('몇 명이서 참가하시나요?'));

while(isNaN(number)) {
  number = parseInt(prompt('숫자를 입력하세요'));
}

const order = document.querySelector('#order');
const word = document.querySelector('#word');
const input = document.querySelector('#input');
const button = document.querySelector('#button');

