"use strict";

/*find_Bef1 - 위치 선택 다 하면 밑에 칩 나타나기*/
//셀렉트 박스
const selectBox = document.querySelectorAll(".top select");
//게시글 슬라이드
const slideArea = document.querySelector(".slide_area");
//내 위치가 등록되지 않았을 때
const none = document.querySelectorAll(".none");

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

    console.log(selected.length);
    /*find_Bef1 페이지 - 내 위치가 등록되면 내 위치 근처 모임 보이기*/
    if (selected.length > 0) {
      slideArea.style.display = "block";
      none[0].style.display = "none";
    } else {
      slideArea.style.display = "none";
      none[0].style.display = "block";
    }
  });
});
