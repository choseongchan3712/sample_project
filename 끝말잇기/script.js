let number = parseInt(prompt('몇 명이서 참가하시나요?'));

while(isNaN(number)) {
  number = parseInt(prompt('숫자를 입력하세요'));
}

const order = document.querySelector('#order');
const word = document.querySelector('#word');
const input = document.querySelector('#input');
const button = document.querySelector('#button');
const regex = /^[ㄱ-ㅎ|가-힣]+$/;

var num = 1;
order.textContent = num; //userNum 함수 뿐만 아니라 여기에도 order.textContent를 써야 처음에 들어갔을때 1이 나옴

const userNum = () => {
  if (num < number) {
    num++;
  } else {
    num = 1;
  }
  order.textContent = num;
};

button.addEventListener("click", userNum);