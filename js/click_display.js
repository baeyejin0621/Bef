"use strict";

//A 요소 클릭하면 B 요소 나타나기
//A
const clickDisplay = document.querySelectorAll(".click_display");
//B
const display = document.querySelectorAll(".display");

clickDisplay.forEach((element, i) => {
  element.addEventListener("click", (event) => {
    if (element.style.display == "block") {
      element.style.display = "none";
      display[i].style.display = "block";
      event.stopPropagation();
    } else if (element.style.display == "none") {
      element.style.display = "block";
      display[i].style.display = "none";
      event.stopPropagation();
    }
  });
});
