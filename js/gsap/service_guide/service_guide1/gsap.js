"use strict";

/* 서비스 소개 페이지 - sec3 카드 나타남 효과 */
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger); //스크롤 트리거

  //공격 & 방어 카드들
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec3",
      start: "0% 15%",
      end: "3000% 50%",
      scrub: 1,
      duration: 20,
      pin: true,
      ease: "linear",
      markers: true,
    },
  });

  tl.fromTo(
    ".attack1",
    {
      opacity: 0,
      y: -200,
    },
    {
      opacity: 1,
      y: 0,
    },
    "+=.5"
  );

  tl.fromTo(
    ".defend1",
    {
      opacity: 0,
      y: 200,
    },
    {
      opacity: 1,
      y: 0,
    },
    "+=2"
  );

  tl.fromTo(
    ".attack2",
    {
      opacity: 0,
      y: -200,
    },
    {
      opacity: 1,
      y: 0,
    },
    "+=2"
  );

  tl.fromTo(
    ".defend2",
    {
      opacity: 0,
      y: 200,
    },
    {
      opacity: 1,
      y: 0,
    },
    "+=2"
  );

  tl.fromTo(
    ".attack3",
    {
      opacity: 0,
      y: -200,
    },
    {
      opacity: 1,
      y: 0,
    },
    "+=2"
  );

  tl.fromTo(
    ".defend3",
    {
      opacity: 0,
      y: 200,
    },
    {
      opacity: 1,
      y: 0,
    },
    "+=2"
  );

  tl.fromTo(
    ".attack4",
    {
      opacity: 0,
      y: -200,
    },
    {
      opacity: 1,
      y: 0,
    },
    "+=2"
  );

  tl.fromTo(
    ".defend4",
    {
      opacity: 0,
      y: 200,
    },
    {
      opacity: 1,
      y: 0,
    },
    "+=2"
  );
});

/*서비스 소개 페이지 - sec4 숫자 주르륵 올라가는 효과*/
