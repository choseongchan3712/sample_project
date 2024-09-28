const section1El = document.querySelector('.section_1');

const content = [
  {
    id: 0,
    img: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/4f7a276e-9995-4b32-bda6-300de0619b25.png?im_w=720&im_q=highq',
    alt: 'img',
    info: "프린스의 '퍼플 레인' 하우스",
    host: '호스트: 웬디 님과 리사 님',
    date: '9월부터 예약 가능'
  },
  {
    id: 1,
    img: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjMyMzc5Mzc2MTc3OTEzMg%3D%3D/original/01819c16-43a1-4aee-9957-9edce6eb8e16.png?im_w=720&im_q=highq',
    alt: 'img',
    info: "거실에서 펼쳐지는 도자 캣의 단독 공연",
    host: '호스트: 도자 캣 님',
    date: '10월부터 예약 가능'
  },
  {
    id: 2,
    img: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE3NzY2MTYzNDg4MjE2ODY1Nw%3D%3D/original/a332d020-4315-4f63-af71-444d46474939.png?im_w=1440&im_q=highq',
    alt: 'img',
    info: "폴리 포켓의 콤팩트에서 보내는 하룻밤",
    host: '호스트: Polly Pocket 님',
    date: '예약 마감'
  },
  {
    id: 3,
    img: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE4NzE3Nzg1NDA2MjM5NzY2NQ%3D%3D/original/6989d581-3f67-4cd9-8cb6-5f5c226aedc6.png?im_w=1440&im_q=highq',
    alt: 'img',
    info: "폴리 포켓의 콤펙트에서 즐기는 플레",
    host: '호스트: Polly Pocket 님',
    date: '예약 마감'
  },
  {
    id: 4,
    img: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4NzY0ODgzNzUzNjQzNw%3D%3D/original/1077cfcd-29d5-42b7-adab-19e0b620e492.jpeg?im_w=1440&im_q=highq',
    alt: 'img',
    info: "케빈 하트와 함께하는 VIP체험",
    host: '호스트: Kevin Hart 님',
    date: '예약 마감'
  },
  {
    id: 5,
    img: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjIzMTk3NDU3MjE4Nzg2NA%3D%3D/original/f4cbe542-3ce0-4c6f-a8f1-d2120c1b2420.jpeg?im_w=1440&im_q=highq',
    alt: 'img',
    info: "엑스 맨션에서 훈련하기",
    host: '호스트: Jubilee 님',
    date: '예약 마감'
  },
]

for (i = 0; i < content.length; i++) {
  const contentEl = document.createElement('div');
  contentEl.classList.add('content');
  contentEl.innerHTML = (`
    <a href="#">
      <img src="${content[i].img}" alt="${content[i].alt}">
    </a>
    <div class="info">${content[i].info}</div>
    <div class="host">${content[i].host}</div>
    <div class="date">${content[i].date}</div>
    `)
    section1El.append(contentEl);
}

const toggleEl = document.querySelector('.toggle');
const circle = document.querySelector('.circle');
const body = document.querySelector('body');

circle.addEventListener('click', () => {
  toggleEl.classList.toggle('active');
  body.classList.toggle('body_active');
})