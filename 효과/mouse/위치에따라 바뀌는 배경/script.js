const sectionE1 = document.querySelector('.section');
const width = Number(window.innerWidth);
const height = Number(window.innerHeight);
const degY = 10 / (width / 2);
const degX = 10 / (height / 2);

const move = (e) => {
  if (e.clientX > (width / 2) && e.clientY > (height / 2)) {
    sectionE1.style.transform = `rotateY(${(e.clientX - (width / 2)) * degY}deg) rotateX(-${(e.clientY - (height / 2)) * degX}deg)`;
  } else if (e.clientX > (width / 2) && e.clientY < (height / 2)) {
    sectionE1.style.transform = `rotateY(${(e.clientX - (width / 2)) * degY}deg) rotateX(${((height / 2) - e.clientY) * degX}deg)`;
  } else if (e.clientX <= (width / 2) && e.clientY > (height / 2)) {
    sectionE1.style.transform = `rotateY(-${((width / 2) - e.clientX) * degY}deg) rotateX(-${(e.clientY - (height / 2)) * degX}deg)`;
  } else if (e.clientX <= (width / 2) && e.clientY < (height / 2)) {
    sectionE1.style.transform = `rotateY(-${((width / 2) - e.clientX) * degY}deg) rotateX(${((height / 2) - e.clientY) * degX}deg)`;
  } 
}


window.addEventListener("mousemove", move);