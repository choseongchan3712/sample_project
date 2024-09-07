const boxWrap = document.querySelector(".box_wrap");
const box = document.querySelectorAll(".box");

let count = 0;

setInterval(() => {
  count++;
  let wid = 100 * count;
  if (count < 6) {
    boxWrap.style.transition = '0.25s';
    boxWrap.style.transform = `translateX(-${wid}vw)`;
  }
  else {
    boxWrap.style.transition = '0.5s';
    boxWrap.style.transform = `translateX(0)`;
    count = 0;
  }
}, 3000);
