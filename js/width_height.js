"use strict";

/*메인 페이지 - 보드게임 썸네일 정사각형으로 유지하기*/
//.boardgame
let boardgame = document.querySelectorAll(".boardgame");

//.boardgame 썸네일
let boardThumb = document.querySelectorAll(".boardgame .thumb");

boardThumb.forEach((element, i) => {
  window.addEventListener("resize", () => {
    element.style.height = getComputedStyle(boardThumb[i]).width;
  });
});
