"use strict";

//메인 페이지 - 두번째 섹션 슬라이드
let sec2Swiper = new Swiper(".sec2_swiper", {
  spaceBetween: 20,
  slidesPerGroup: 1,
  centeredSlide: true,
  loop: true,

  //화살표
  navigation: {
    enabled: false,
  },

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
      slidesPerView: 3,

      //화살표
      navigation: {
        enabled: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
  },
});

//메인 페이지 - 다섯번째 섹션 슬라이드
let sec5Swiper = new Swiper(".sec5_swiper", {
  spaceBetween: 20,
  loop: true,
  slidesPerView: 1,
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
  breakpoints: {},
});
