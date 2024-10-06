gsap.to(".green", { 
  duration: 5,
  x: '100vw',
  xPercent: -100,
  rotation: 720,
  repeat: Infinity,
  yoyo: true,
});

gsap.to(".red", { 
  duration: 5,
  x: '100vw',
  xPercent: -200,
  rotation: 720,
  repeat: Infinity,
  yoyo: true,
  delay: 1,
});