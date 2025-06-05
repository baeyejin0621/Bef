"use strict";

//A 요소 클릭하면 B 요소 나타나기
const clickDisplay = document.querySelectorAll(".click_display");
const display = document.querySelectorAll(".display");

clickDisplay.forEach((element, i) => {
  element.addEventListener("click", function () {
    //인덱스 번호에 해당하는 B를 블록하라고 하면댐
    display[i].style.display = "block";
  });
});

const stopBubbling = document.querySelectorAll(".stop_bubbling");
stopBubbling.forEach((elem) => {
  elem.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});
