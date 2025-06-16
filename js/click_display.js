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

/*find_Bef1 - 위치 선택 다 하면 밑에 칩 나타나기*/
const selectBox = document.querySelectorAll(".top select");

//첫번째 선택하면 두번째 선택 박스 초기화
selectBox[0].addEventListener("click", () => {
  if (selectBox[0].value > 0) {
    selectBox[1].value = 0;
  }
});

selectBox.forEach((element) => {
  element.addEventListener("change", () => {
    if (selectBox[0].value > 0 && selectBox[1].value > 0) {
      //태그 껍데기
      const city = document.createElement("div");

      //클래스명
      const cityClass = document.createAttribute("class");
      cityClass.value = "selected";

      //내용 넣을 태그 껍데기
      const citySpan = document.createElement("span");

      //내용
      //첫번째 셀렉트 박스 value값에 맞는 내용
      let firstCity = Array.from(selectBox[0].children);
      firstCity = firstCity.find((elem, i) => {
        return i == selectBox[0].value;
      });
      firstCity = firstCity.innerText;

      //첫번째 셀렉트 박스 value값에 맞는 내용
      let secondCity = Array.from(selectBox[1].children);
      secondCity = secondCity.find((elem, i) => {
        return i == selectBox[1].value;
      });
      secondCity = secondCity.innerText;

      const cityName = document.createTextNode(firstCity + " " + secondCity);

      //x 아이콘 넣을 button 태그 껍데기 만들기
      let xBtn = document.createElement("button");

      //x 아이콘 불러올 img 태그 껍데기 만들기
      let xIcon = document.createElement("img");

      //img 태그 속성
      let xSrc = document.createAttribute("src");
      xSrc.value = "../../img/sub/find_Bef/find_Bef1/sec1/x.svg";
      let xAlt = document.createAttribute("alt");
      xAlt.value = "x";

      //img 태그에 속성 넣기
      xIcon.setAttributeNode(xSrc);
      xIcon.setAttributeNode(xAlt);

      //button 태그에 img 태그 넣기
      xBtn.appendChild(xIcon);

      //button 태그에 클래스명 붙이기
      let btnClass = document.createAttribute("class");
      btnClass.value = "x_btn";
      xBtn.setAttributeNode(btnClass);

      //태그에 클래스명 붙이기
      city.setAttributeNode(cityClass);

      //태그 안에 글 넣기
      citySpan.appendChild(cityName);
      city.appendChild(citySpan);

      //x 아이콘 넣기
      city.appendChild(xBtn);

      //미리 만들어둔 위치에 넣기
      //부모 노드
      const bottom = document.querySelector(".bottom");
      bottom.appendChild(city);
    }

    //x 버튼 누르면 selected 없어지기
    //x 버튼
    const xButton = document.querySelectorAll(".x_btn");
    //없앨 요소
    const selected = document.querySelectorAll(".selected");

    xButton.forEach((element, i) => {
      element.addEventListener("click", () => {
        selected[i].style.display = "none";
      });
    });
  });
});

/*find_Bef1 페이지 - 내 위치가 등록되면 내 위치 근처 모임 & 내 모임 등록 보이기*/
//게시슬 슬라이드
const befSlide = document.querySelector(".bef_slide");
//내 위치가 등록되지 않았을 때
const none = document.querySelectorAll(".none");
