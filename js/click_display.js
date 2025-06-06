"use strict";

//헤더에서 돋보기 버튼 누르면 색깔 바뀌고 input 태그 나타나기
const search = document.querySelector("#search");

search.addEventListener("click", () => {
  if (
    window.getComputedStyle(this.children[0]).display == "none" &&
    window.getComputedStyle(this.children[2]).display == "block"
  ) {
    this.children[0].display = "block";
    this.children[2].display = "block";
  }
});
//안 먹힘

//빈 하트 클릭하면 채워진 하트로 바뀌기
const like = document.querySelectorAll(".like");

like.forEach((element, i) => {
  element.addEventListener("click", (event) => {
    if (
      window.getComputedStyle(element.children[0].children[0]).display ==
      "block"
    ) {
      element.children[0].children[0].style.display = "none";
      element.children[0].children[1].style.display = "block";
      element.children[1].innerText = Number(element.children[1].innerText) + 1;
    } else if (
      window.getComputedStyle(like[i].children[0].children[0]).display == "none"
    ) {
      element.children[0].children[0].style.display = "block";
      element.children[0].children[1].style.display = "none";
      element.children[1].innerText = Number(element.children[1].innerText) - 1;
    }

    event.preventDefault();
  });
});
