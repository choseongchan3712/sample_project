const circle = document.querySelector(".circle");

window.addEventListener("mousemove", (e) => {
  circle.style.left = `${e.clientX}px`;
  circle.style.top = `${e.clientY}px`;
  circle.style.transform = `translate(-50%, -50%)`;
});

circle.addEventListener("mousedown", () => {
  circle.classList.add('circle_active');
  circle.classList.remove('circle');
})
circle.addEventListener("mouseup", () => {
  circle.classList.add('circle');
  circle.classList.remove('circle_active');
})