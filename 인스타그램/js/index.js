// swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 8,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const contentsWrapEl = document.querySelector('.contents_wrap');
const sideEl = document.querySelector('.side');

contentsWrapEl.addEventListener("click", (e) => {
  if(e.target.classList.contains('fa-comment')) {
    const commentWrapEl = e.target.parentNode.parentNode.parentNode.querySelector(".comment_wrap");
    commentWrapEl.classList.add('active');
    sideEl.style.zIndex = "0";
  } else if(e.target.classList.contains('comment_wrap') && !e.target.classList.contains('comment_box')) {
    const commentWrapEl = e.target;
    commentWrapEl.classList.remove('active');
    sideEl.style.zIndex = "1";
  }
})