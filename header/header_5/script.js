const header = document.querySelector("header");


//# wheel 이벤트를 사용하면 wheelDelta의 값을 반환한다.
//# wheelDeltaY 의 값이 0보다 크면 위로 스크롤 한거고
//# wheelDeltaY 의 값이 0보다 작으면 밑으로 스크롤 한거고=다.

window.addEventListener("wheel", (e) => {
  let upDown = e.wheelDeltaY;

  if (upDown < 0) {
    header.style.backgroundColor = "black";
  } else if (upDown > 0){
    header.style.backgroundColor = "gray";
  }
})
