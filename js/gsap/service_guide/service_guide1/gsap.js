"use strict";

/* 서비스 소개 페이지 - sec3 카드 나타남 효과 */
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger); //스크롤 트리거

  //.sece3 pin 효과
  let tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec3",
      start: "62% 50%",
      end: "1100% 50%",
      scrub: 1,
      pin: true,
    },
  });

  //공격 & 방어 카드들
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sec3 .cards",
        start: "50% 60%",
        end: "3000% 50%",
        scrub: 1,
        duration: 20,
        ease: "linear",
      },
    })
    .fromTo(
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
    )
    .fromTo(
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
    )
    .fromTo(
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
    )
    .fromTo(
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
    )
    .fromTo(
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
    )
    .fromTo(
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
    )
    .fromTo(
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
    )
    .fromTo(
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

  /*서비스 소개 페이지 - sec4 숫자 주르륵 올라가는 효과*/
  const numberUp1 = document.querySelector("#number_up1");
  const numberUp2 = document.querySelector("#number_up2");

  let numStart = 0;

  gsap.to(numStart, {
    numStart: 1547,
    duration: 3,
    ease: "linear",
    onUpdate: numChange,
    scrollTrigger: {
      trigger: "footer",
      start: "0% 100%",
      end: "0% 100%",
      scrub: 1,
    },
  });

  function numChange() {
    numberUp1.innerText = numStart.toFixed();
  }
});
