"use strict";

/*헤더에서 돋보기 버튼 누르면 색깔 바뀌고 input 태그 나타나기*/
//버튼 태그
const search = document.querySelector("#search");
//input 담은 div
const inputParent = document.querySelector("#input_parent");

search.addEventListener("click", function () {
  if (getComputedStyle(inputParent).display == "none") {
    inputParent.children[0].style.borderBottom =
      "1px solid var(--black-color6)";
    inputParent.style.display = "block";
    inputParent.children[0].value = "";
    this.children[1].style.display = "none";
    this.children[2].style.display = "block";
  } else if (getComputedStyle(inputParent).display == "block") {
    inputParent.style.display = "";
    this.children[1].style.display = "";
    this.children[2].style.display = "";
  }
});

//인풋 태그 눌렀을 때 버블링 막기
inputParent.addEventListener("click", (event) => {
  if (getComputedStyle(inputParent).display == "block") {
    event.stopPropagation();
  }
});

/*헤더에서 웹 너비 좁아졌을 때 나타나는 메뉴 아이콘 누르면 1차 메뉴 나타나기*/
//메뉴 버튼
const allMenu = document.querySelector("#all_menu");
//gnb
const mobileGnb = document.querySelector("#mobile_gnb");
//1차 메뉴 li
let depth1Menu = document.querySelectorAll(".depth1_menu");
//2차 메뉴 ul
let depth2Menu = document.querySelectorAll(".mobile_submenu");

allMenu.addEventListener("click", () => {
  if (getComputedStyle(mobileGnb).display == "none") {
    allMenu.children[0].style.color = "var(--main-color1)";
    mobileGnb.style.display = "block";
  } else if (getComputedStyle(mobileGnb).display == "block") {
    allMenu.children[0].style.color = "";
    mobileGnb.style.display = "none";
  }

  //1차 메뉴 누르면 그에 맞는 2차 메뉴 나오기
  depth1Menu.forEach((element, i) => {
    element.addEventListener("click", () => {
      //클릭한 1차 메뉴의 2차 메뉴 배경색 바꾸기
      depth2Menu[i].style.backgroundColor = "var(--black-color11)";

      //클릭한 1차 메뉴 빼고 다른 1차 메뉴 닫기
      if (getComputedStyle(depth2Menu[i]).display == "none") {
        depth2Menu[i].style.display = "block";
      } else if (getComputedStyle(depth2Menu[i]).display == "block") {
        depth2Menu[i].style.display = "none";
      }
    });
  });

  //클릭한 1차 메뉴 빼고 다른 1차 메뉴 닫기
  mobileGnb.addEventListener("click", (event) => {
    depth1Menu.forEach((element, i) => {
      if (element != event.target) {
        depth2Menu[i].style.display = "none";
      }
    });
  });

  //innerWidth가 1023 넘어가면 mobileGnb 없애기
  window.addEventListener("resize", () => {
    if (innerWidth > 1023) {
      mobileGnb.style.display = "none";
      allMenu.children[0].style.color = "";
    }
  });
});

/*게시글에서 빈 하트 클릭하면 채워진 하트로 바뀌기*/
//하트 아이콘이랑 하트 수의 부모 div
const like = document.querySelectorAll(".like");
//빈 하트
const heart = document.querySelectorAll(".heart");

like.forEach((element, i) => {
  element.addEventListener("click", (event) => {
    if (getComputedStyle(heart[i]).display == "block") {
      //빈하트
      heart[i].style.display = "none";
      //채워진 하트
      heart[i].nextElementSibling.style.display = "block";
      //좋아요 수
      element.children[1].innerText = Number(element.children[1].innerText) + 1;
    } else if (getComputedStyle(heart[i]).display == "none") {
      //빈하트
      heart[i].style.display = "block";
      //채워진 하트
      heart[i].nextElementSibling.style.display = "none";
      //좋아요 수
      element.children[1].innerText = Number(element.children[1].innerText) - 1;
    }

    event.preventDefault();
  });
});

/*보드게임 가이드 - 키워드 클릭하면 스타일 바뀌기*/
//키워드
const keyword = document.querySelectorAll(".keywords button");

keyword.forEach((element) => {
  element.addEventListener("click", () => {
    if (getComputedStyle(element).color == "rgb(34, 34, 34)") {
      element.style.backgroundColor = "var(--sub-color1)";
      element.style.fontWeight = "var(--semibold-weight-font)";
      element.style.color = "var(--white-color1)";
    } else if (getComputedStyle(element).color == "rgb(255, 255, 255)") {
      element.style.backgroundColor = "";
      element.style.fontWeight = "";
      element.style.color = "";
    }
  });
});

/*같은 줄에 키워드 클릭하면 다른 키워드 선택 취소*/
//키워드 박스
const keywordBox = document.querySelectorAll(".keywords");

keywordBox.forEach((element, i) => {
  element.addEventListener("click", (event) => {
    let keywordBoxChildren = Array.from(keywordBox[i].children);
    keywordBoxChildren.forEach((element) => {
      if (element != event.target) {
        element.style.backgroundColor = "";
        element.style.fontWeight = "";
        element.style.color = "";
      }
    });
  });
});

/*더보기 버튼 클릭하면 숨겨진 section 나오기*/
//더보기 버튼
const moreBtn = document.querySelector("#more");
//숨겨진 section
let allSec = document.querySelectorAll("section");
allSec = Array.from(allSec);

moreBtn.addEventListener("click", () => {
  let showSec = allSec.find((element) => {
    return getComputedStyle(element).display == "none";
  });

  //showSec이 allSec의 마지막 요소면 allBtn 숨기기
  if (showSec != allSec[allSec.length - 2]) {
    showSec.style.display = "block";
  } else {
    showSec.style.display = "block";
    moreBtn.style.display = "none";
  }
});
