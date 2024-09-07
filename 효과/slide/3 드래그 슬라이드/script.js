const slideBox = document.querySelector('.box_wrap');

const startPoint = {x: 0, y: 0};

const moveValue = {x: 0, y: 0};

const move = e => {
  moveValue.x = e.clientX - startPoint.x;
  slideBox.style.transform = `translate3d(${moveValue.x}px, 0, 0)`;
};

slideBox.addEventListener('mousedown', e => {
  startPoint.x = e.clientX - moveValue.x;
  document.addEventListener('mousemove', move);
});

document.addEventListener('mouseup', () => {
  document.removeEventListener('mousemove', move);
});