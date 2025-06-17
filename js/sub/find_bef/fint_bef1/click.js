"use strict";

/*find_Bef1 - 위치 선택 다 하면 밑에 칩 나타나기*/
//셀렉트 박스
const selectBox = document.querySelectorAll(".top select");
//게시글 슬라이드
const slideArea = document.querySelector(".slide_area");
//내 위치가 등록되지 않았을 때
const none = document.querySelectorAll(".none");
//내가 등록한 모임
const myPost = document.querySelector(".post");

//첫번째 선택하면 두번째 선택 박스 초기화
selectBox[0].addEventListener("change", () => {
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
      //selected 요소
      let selected = Array.from(bottom.children);
      //selected 안의 도시명
      let selectedText = [];
      selected.forEach((elem) => {
        selectedText.push(elem.innerText);
      });

      if (selected.length === 0) {
        bottom.appendChild(city);
      } else if (!selectedText.includes(city.innerText)) {
        bottom.appendChild(city);
      }
    }

    //x 버튼 누르면 selected 없어지기
    //x 버튼
    const xButton = document.querySelectorAll(".x_btn");
    //없앨 요소의 부모
    const bottom = document.querySelector(".bottom");
    //js로 만든 selected 요소
    const selected = document.querySelectorAll(".selected");

    xButton.forEach((element, i) => {
      element.addEventListener("click", () => {
        if (bottom.children.length === 1) {
          bottom.removeChild(selected[i]);
          slideArea.style.display = "none";
          none[0].style.display = "block";
          //셀렉트바 초기화
          selectBox[0].value = 0;
          selectBox[1].value = 0;
        } else {
          bottom.removeChild(selected[i]);
        }
      });
    });

    /*내 위치가 등록되면 내 위치 근처 모임, 내가 등록한 모임 보이기*/
    if (selected.length > 0) {
      slideArea.style.display = "block";
      myPost.style.display = "flex";
      none.forEach((elem) => {
        elem.style.display = "none";
      });
    } else {
      slideArea.style.display = "none";
      myPost.style.display = "none";
      none.forEach((elem) => {
        elem.style.display = "block";
      });
    }
  });
});

//등록 버튼
const submitBtn = document.querySelector(".submit");
//모임 날짜 input
const date = document.querySelector("input[type=date]");
//모임 시작 시간 input
const from = document.querySelector("#from");
//모임 끝나는 시간 input
const to = document.querySelector("#to");
//모임 장소 select
const place = document.querySelector("select.place");
//보드게임 select
const boardgame = document.querySelector(".select_game");

/*모임 날짜를 오늘 이전으로 정할 수 없게 하기*/
const today = new Date();
let dateMin = [
  String(today.getFullYear()),
  ("00" + String(today.getMonth() + 1)).slice(-2),
  ("00" + String(today.getDate())).slice(-2),
];

dateMin = dateMin.join("-");
date.min = dateMin;

/*모임 끝나는 시간을 모임 시작 시간보다 빠르게 정할 수 없게 하기*/

/*등록 버튼 누르면 내 모임 등록되기*/
submitBtn.addEventListener("click", () => {
  //값 넣을 껍데기 만들기
  //.post_after
  let postAfter = document.createElement("div");
  let postAfterClass = document.createAttribute("class");
  postAfterClass.value = "post_after";
  postAfter.setAttributeNode(postAfterClass);

  //.left
  let left = document.createElement("div");
  let leftClass = document.createAttribute("class");
  leftClass.value = "left";
  left.setAttributeNode(leftClass);
  postAfter.appendChild(left);

  //.top
  let top = document.createElement("div");
  let topClass = document.createAttribute("class");
  topClass.value = "top";
  top.setAttributeNode(topClass);
  left.appendChild(top);

  //.top h4
  let h4 = document.createElement("h4");
  top.appendChild(h4);
  console.log(postAfter);

  //.top span
  let timeAfter = document.createElement("span");

  //날짜
  let dateVal = date.value;
  //시작 시간
  let fromVal = from.value;
  //끝나는 시간
  let toVal = to.value;
});
