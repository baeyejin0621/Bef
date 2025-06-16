"use strict";

/*find_bef1 페이지 슬라이드*/
let befSwiper = new Swiper(".bef_slide", {
  spaceBetween: 20,
  loop: true,
  slidesPerGroup: 1,

  // 웹접근성
  a11y: {
    enabled: true,
    prevSlideMessage: "이전 슬라이드",
    nextSlideMessage: "다음 슬라이드",
    slideLabelMessage:
      "총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.",
  },

  //반응형
  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 2,

      //화살표
      navigation: {
        nextEl: ".bef_btn_next",
        prevEl: ".bef_btn_prev",
      },
    },
  },
});
