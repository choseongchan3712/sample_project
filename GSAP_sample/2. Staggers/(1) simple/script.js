gsap.to(".box", {
  duration: 1,
  rotation: 360,
  opacity: 1, 
  delay: 0.5, 
  stagger: 0.2, //? 다음 엘리먼트 동작까지 0.2초 딜레이
  ease: "sine.out", 
  force3D: true
});

document.querySelectorAll(".box").forEach(function(box) {
  box.addEventListener("click", function() {
    gsap.to(".box", {
      duration: 0.5, 
      opacity: 0, 
      y: -100, 
      stagger: 0.1,
      ease: "back.in"
    });
  });
});