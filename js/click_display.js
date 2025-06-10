"use strict";

/*헤더에서 돋보기 버튼 누르면 색깔 바뀌고 input 태그 나타나기*/
const search = document.querySelector("#search");

search.addEventListener("click", function () {
  if (getComputedStyle(this.children[0]).display == "none") {
    this.children[0].children[0].style.borderBottom =
      "1px solid var(--black-color6)";
    this.children[0].style.display = "block";
    this.children[0].children[0].value = "";
    this.children[1].style.display = "none";
    this.children[2].style.display = "block";
  } else if (getComputedStyle(this.children[0]).display == "block") {
    this.children[0].style.display = "";
    this.children[1].style.display = "";
    this.children[2].style.display = "";
  }
});

//인풋 태그 눌렀을 때 버블링 막기
search.children[0].addEventListener("click", (event) => {
  if (getComputedStyle(search.children[0]).display == "block") {
    event.stopPropagation();
  }
});

/*웹 너비 좁아졌을 때 나타나는 메뉴 아이콘 누르면 1차 메뉴 나타나기*/
//메뉴 아이콘
const allMenu = document.querySelector("#all_menu");
//gnb
const mobileGnb = document.querySelector("#mobile_gnb");
//1차 메뉴
let Depth1Menu = document.querySelectorAll(".depth1_menu");
//2차 메뉴
let Depth2Menu = document.querySelectorAll(".mobile_submenu");

allMenu.addEventListener("click", () => {
  if (getComputedStyle(mobileGnb).display == "none") {
    allMenu.children[0].style.display = "none";
    allMenu.children[1].style.display = "flex";
    mobileGnb.style.display = "block";
  } else if (getComputedStyle(mobileGnb).display == "block") {
    allMenu.children[0].style.display = "";
    allMenu.children[1].style.display = "";
    mobileGnb.style.display = "none";
  }

  //1차 메뉴 누르면 그에 맞는 2차 메뉴 나오기
  Depth1Menu.forEach((element, i, arr) => {
    //클릭한 1차 메뉴 빼고 다른 1차 메뉴 닫기
    element.addEventListener("click", () => {
      arr.forEach((elem) => {
        elem.children[0].style.display = "none";
      });

      //클릭한 1차 메뉴의 2차 메뉴 배경색 바꾸기
      element.children[0].style.backgroundColor = "var(--black-color11)";

      if (getComputedStyle(Depth2Menu[i]).display == "none") {
        Depth2Menu[i].style.display = "block";
      } else if (getComputedStyle(Depth2Menu[i]).display == "block") {
        Depth2Menu[i].style.display = "none";
      }
    });
  });
});

//innerWidth가 1023 넘어가면 mobileGnb 없애기
mobileGnb.addEventListener("resize", () => {
  if (innerWidth > 1023) {
    this.style.display = "none";
  }
});
//안 됨

/*빈 하트 클릭하면 채워진 하트로 바뀌기*/
const like = document.querySelectorAll(".like");

like.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (getComputedStyle(element.children[0].children[0]).display == "block") {
      element.children[0].children[0].style.display = "none";
      element.children[0].children[1].style.display = "block";
      element.children[1].innerText = Number(element.children[1].innerText) + 1;
    } else if (
      getComputedStyle(element.children[0].children[0]).display == "none"
    ) {
      element.children[0].children[0].style.display = "block";
      element.children[0].children[1].style.display = "none";
      element.children[1].innerText = Number(element.children[1].innerText) - 1;
    }

    event.preventDefault();
  });
});
