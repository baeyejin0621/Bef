"use strict";

/*find_Bef1 - 위치 선택 다 하면 밑에 칩 나타나기*/
//셀렉트 박스
const selectBox = document.querySelectorAll(".top select");
//게시글 슬라이드
const slideArea = document.querySelector(".slide_area");
//내 위치가 등록되지 않았을 때
const none = document.querySelectorAll(".none");
//내 모임 보이는 영역
const post = document.querySelector(".post");

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
      xSrc.value = "../../img/sub/find_bef/find_bef1/sec1/x.svg";
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
          post.style.display = "none";
          none.forEach((elem) => {
            elem.style.display = "block";
          });
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
      post.style.display = "flex";
      none.forEach((elem) => {
        elem.style.display = "none";
      });
    } else {
      slideArea.style.display = "none";
      post.style.display = "none";
      none.forEach((elem) => {
        elem.style.display = "block";
      });
    }
  });
});

//등록 버튼
const submitBtn = document.querySelector(".submit");
//제목 input
const postTitle = document.querySelector(".top input");
console.log(postTitle.value);
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
//인원 input
const people = document.querySelector("input[placeholder*=인원수]");
//pop_up_bg
const popUpBg = document.querySelector(".pop_up_bg");
//pop_up1
const popUp1 = document.querySelector(".pop_up1");
//pop_up2
const popUp2 = document.querySelector(".pop_up2");

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
  /*등록 버튼 눌렀을 때 모든 내용이 채워져있지 않으면 레이어창 보이기*/
  if (
    postTitle.value &&
    date.value &&
    from.value &&
    to.value &&
    place.value > 0 &&
    boardgame.value > 0 &&
    people.value > 0
  ) {
    //값 넣을 껍데기 만들기
    //.post_after
    let postAfter = document.createElement("div");
    let postAfterClass = document.createAttribute("class");
    postAfterClass.value = "post_after";
    postAfter.setAttributeNode(postAfterClass);
    post.insertBefore(postAfter, post.childNodes[0]);

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
    let h4Text = document.createTextNode(postTitle.value);
    h4.appendChild(h4Text);
    top.appendChild(h4);

    //.top span
    let timeAfter = document.createElement("span");
    let timeAfterText = document.createTextNode(elaspsedTime(today.getTime()));
    timeAfter.appendChild(timeAfterText);
    top.appendChild(timeAfter);

    //.content
    let content = document.createElement("div");
    let contentClass = document.createAttribute("class");
    contentClass.value = "content";
    content.setAttributeNode(contentClass);
    left.appendChild(content);

    //.time_line
    let timeLine = document.createElement("div");
    let timeLineClass = document.createAttribute("class");
    timeLineClass.value = "time_line";
    timeLine.setAttributeNode(timeLineClass);
    content.appendChild(timeLine);

    //.date
    let dateP = document.createElement("p");
    let datePClass = document.createAttribute("class");
    datePClass.value = "date";
    dateP.setAttributeNode(datePClass);
    let dateText = document.createTextNode(date.value);
    dateP.appendChild(dateText);
    timeLine.appendChild(dateP);

    //.timeline span
    let columnLine = document.createElement("span");
    let columnLineText = document.createTextNode("|");
    columnLine.appendChild(columnLineText);
    timeLine.appendChild(columnLine);

    //.time
    let timeP = document.createElement("p");
    let timePClass = document.createAttribute("class");
    timePClass.value = "time";
    timeP.setAttributeNode(timePClass);
    timeLine.appendChild(timeP);

    //.from
    let fromP = document.createElement("p");
    let fromPClass = document.createAttribute("class");
    fromPClass.value = "from";
    fromP.setAttributeNode(fromPClass);
    let fromText = document.createTextNode(from.value);
    fromP.appendChild(fromText);
    timeP.appendChild(fromP);

    //.time span
    let rowLine = document.createElement("span");
    let rowLineText = document.createTextNode("-");
    rowLine.appendChild(rowLineText);
    timeP.appendChild(rowLine);

    //.to
    let toP = document.createElement("p");
    let toPClass = document.createAttribute("class");
    toPClass.value = "to";
    toP.setAttributeNode(toPClass);
    let toPText = document.createTextNode(to.value);
    toP.appendChild(toPText);
    timeP.appendChild(toP);

    //.place
    let placeP = document.createElement("p");
    let placePClass = document.createAttribute("class");
    placePClass.value = "place";
    placeP.setAttributeNode(placePClass);
    let placePText = Array.from(place.children).find((elem, i) => {
      return i == place.value;
    });
    placePText = placePText.innerText;
    placePText = document.createTextNode(placePText);
    placeP.appendChild(placePText);
    content.appendChild(placeP);

    //.boardgame
    let boardgameP = document.createElement("p");
    let boardgamePClass = document.createAttribute("class");
    boardgamePClass.value = "boardgame";
    boardgameP.setAttributeNode(boardgamePClass);
    let boardgamePText = Array.from(boardgame.children).find((elem, i) => {
      return i == boardgame.value;
    });
    boardgamePText = boardgamePText.innerText;
    boardgamePText = document.createTextNode(boardgamePText);
    boardgameP.appendChild(boardgamePText);
    content.appendChild(boardgameP);

    //.people
    let peopleP = document.createElement("p");
    let peoplePClass = document.createAttribute("class");
    peoplePClass.value = "people";
    peopleP.setAttributeNode(peoplePClass);
    let peoplePSpan = document.createElement("span");
    let peoplePSpanText = document.createTextNode("0");
    peoplePSpan.appendChild(peoplePSpanText);
    peopleP.appendChild(peoplePSpan);
    let peoplePText = document.createTextNode(`/${people.value}`);
    peopleP.appendChild(peoplePText);
    content.append(peopleP);

    //.btn_area
    let btnArea = document.createElement("div");
    let btnAreaClass = document.createAttribute("class");
    btnAreaClass.value = "btn_area";
    btnArea.setAttributeNode(btnAreaClass);
    left.appendChild(btnArea);

    //.edit
    let editBtn = document.createElement("button");
    let editBtnType = document.createAttribute("type");
    editBtnType.value = "button";
    editBtn.setAttributeNode(editBtnType);
    let editBtnClass = document.createAttribute("class");
    editBtnClass.value = "edit";
    editBtn.setAttributeNode(editBtnClass);
    let editBtnText = document.createTextNode("수정");
    editBtn.appendChild(editBtnText);
    btnArea.appendChild(editBtn);

    //.delete
    let deleteBtn = document.createElement("button");
    let deleteBtnType = document.createAttribute("type");
    deleteBtnType.value = "button";
    deleteBtn.setAttributeNode(deleteBtnType);
    let deleteBtnClass = document.createAttribute("class");
    deleteBtnClass.value = "delete";
    deleteBtn.setAttributeNode(deleteBtnClass);
    let deleteBtnText = document.createTextNode("삭제");
    deleteBtn.appendChild(deleteBtnText);
    btnArea.appendChild(deleteBtn);

    /*등록 버튼 누른 후 내용 초기화*/
    postTitle.value = "";
    date.value = 0;
    from.value = 0;
    to.value = 0;
    place.value = 0;
    boardgame.value = 0;
    people.value = "";
  } else {
    popUpBg.style.display = "block";
    popUp1.style.display = "none";
    popUp2.style.display = "flex";
  }

  /*확인 버튼 누르면 popUp2 사라지기*/
  const ok = document.querySelector(".pop_up2 button");
  ok.addEventListener("click", () => {
    popUpBg.style.display = "none";
    popUp2.style.display = "none";
  });

  /*delete 버튼 누르면 레이어창 뜨고 확인 버튼 누르면 삭제하기*/
  const dltBtn = document.querySelectorAll(".delete");
  dltBtn.forEach((element, i) => {
    element.addEventListener("click", () => {
      popUpBg.style.display = "block";
      popUp1.style.display = "flex";
      popUp2.style.display = "none";

      //확인 버튼 누르면 게시글 삭제하기
      //확인 버튼
      const realDelete = document.querySelector(".pop_up1 .yes");
      realDelete.addEventListener("click", () => {
        const postAfter = document.querySelectorAll(".post_after");
        post.removeChild(postAfter[i]);
        popUp1.style.display = "none";
        popUpBg.style.display = "none";
      });

      //취소 버튼
      const cancel = document.querySelector(".pop_up1 .no");
      cancel.addEventListener("click", () => {
        popUp1.style.display = "none";
        popUpBg.style.display = "none";
      });
    });
  });
});

/*게시글 게시 후 얼마나 시간이 지났는지 보여주는 함수*/
function elaspsedTime(timeThen) {
  let nowTime = new Date();
  let thenTime = new Date(timeThen);

  let timeSec = Math.floor((nowTime.getTime() - thenTime.getTime()) / 1000);

  if (timeSec < 60) {
    return "방금 전";
  }

  if (timeSec < 60 * 60) {
    return `${Math.floor(timeSec / 60)}분 전`;
  }

  if (timeSec < 60 * 60 * 24) {
    return `${Math.floor(timeSec / (60 * 60))}시간 전`;
  }

  if (timeSec < 60 * 60 * 24 * 7) {
    return `${Math.floor(timeSec / (60 * 60 * 24))}일 전`;
  }

  if (timeSec >= 60 * 60 * 24 * 7) {
    return thenTime;
  }
}
