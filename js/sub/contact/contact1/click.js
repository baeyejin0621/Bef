"use strict";

/*아래 화살표 누르면 답변 보이고 위 화살표 누르면 안 보이게 하기*/
//버튼
const arrowBtn = document.querySelectorAll(".top button");
//아래 화살표
const arrowDown = document.querySelectorAll(".top button img:last-child");
//위 화살표
const arrowUp = document.querySelectorAll(".top button img:first-child");
//답변 영역
const answer = document.querySelectorAll(".bottom");
//답변
const answerP = document.querySelectorAll(".bottom p");

arrowBtn.forEach((element, i) => {
  element.addEventListener("click", () => {
    if (getComputedStyle(arrowDown[i]).display == "block") {
      arrowDown[i].style.display = "none";
      arrowUp[i].style.display = "block";
      //답변 높이
      const answerHeight = getComputedStyle(answerP[i]).height;
      answer[i].style.height = answerHeight;
    } else if (getComputedStyle(arrowDown[i]).display == "none") {
      arrowDown[i].style.display = "block";
      arrowUp[i].style.display = "none";
      answer[i].style.height = 0;
    }
  });
});
