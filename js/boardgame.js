"use strict";

/*보드게임 썸네일 정사각형으로 유지하기*/
//.boardgame
let boardgame = document.querySelectorAll(".boardgame");

//.boardgame 썸네일
let boardThumb = document.querySelectorAll(".boardgame .thumb");

boardThumb.forEach((element, i) => {
  window.addEventListener("resize", () => {
    element.style.height = getComputedStyle(boardThumb[i]).width;
  });

  window.addEventListener("load", () => {
    element.style.height = getComputedStyle(boardThumb[i]).width;
  });

  window.addEventListener("click", () => {
    element.style.height = getComputedStyle(boardThumb[i]).width;
  });
});

/*키워드 설정하면 그 키워드에 맞는 보드게임 보이기*/
//보드게임 객체를 담은 배열
const boardgameArr = [
  {
    h3: "테라포밍 마스",
    play: [0, 1, 2, 3],
    people: [0, 1, 2, 3, 4],
    age: [3, 4],
    type: [0, 4],
  },
  {
    h3: "라쿠카라차",
    play: [0, 1, 2, 3],
    people: [1, 2, 3],
    age: [0, 1, 2, 3, 4],
    type: [4],
  },
  {
    h3: "루핑루이",
    play: [0, 1, 2, 3],
    people: [1, 2, 3],
    age: [0, 1, 2, 3, 4],
    type: [4],
  },
  {
    h3: "스플렌더",
    play: [1, 2, 3],
    people: [1, 2, 3],
    age: [1, 2, 3, 4],
    type: [4],
  },
  {
    h3: "카탄 3D",
    play: [1, 2, 3],
    people: [2, 3],
    age: [3, 4],
    type: [3, 4],
  },
  {
    h3: "젝스 님트 30주년 기념판",
    play: [1, 2, 3],
    people: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    age: [1, 2, 3, 4],
    type: [4],
  },
  {
    h3: "딕싯 디즈니 100주년 기념판",
    play: [0, 1, 2, 3],
    people: [2, 3, 4, 5],
    age: [1, 2, 3, 4],
    type: [0, 4],
  },
  {
    h3: "위즈스톤 컴플리트 에디션",
    play: [2, 3],
    people: [1],
    age: [0, 1, 2, 3, 4],
    type: [4],
  },
  {
    h3: "텀블링 몽키",
    play: [0, 1, 2, 3],
    people: [1, 2, 3],
    age: [0, 1, 2, 3, 4],
    type: [4],
  },
  {
    h3: "펭귄 얼음 깨기",
    play: [0, 1, 2, 3],
    people: [1, 2, 3],
    age: [1, 2, 3, 4],
    type: [4],
  },
  {
    h3: "아슬아슬 이글루",
    play: [0, 1, 2, 3],
    people: [1, 2, 3],
    age: [0, 1, 2, 3, 4],
    type: [4],
  },
  {
    h3: "심술쟁이 고양이",
    play: [0, 1, 2, 3],
    people: [1, 2, 3],
    age: [0, 1, 2, 3, 4],
    type: [4],
  },
  {
    h3: "언락7",
    play: [1, 2, 3],
    people: [1, 2, 3, 4, 5],
    age: [1, 2, 3, 4],
    type: [3],
  },
  {
    h3: "여섯 불꽃",
    play: [1, 2, 3],
    people: [1, 2, 3, 4],
    age: [1, 2, 3, 4],
    type: [4],
  },
  {
    h3: "로스트 시티",
    play: [1, 2, 3],
    people: [1],
    age: [1, 2, 3, 4],
    type: [4],
  },
  {
    h3: "우노",
    play: [0, 1, 2, 3],
    people: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    age: [0, 1, 2, 3, 4],
    type: [4],
  },
  {
    h3: "달무티",
    play: [1, 2, 3],
    people: [3, 4, 5, 6, 7],
    age: [1, 2, 3, 4],
    type: [4],
  },
  {
    h3: "조가비 해변",
    play: [0, 1, 2, 3],
    people: [1, 2, 3],
    age: [1, 2, 3, 4],
    type: [4],
  },
  {
    h3: "냥벽한 공간",
    play: [1, 2, 3],
    people: [1, 2, 3],
    age: [1, 2, 3, 4],
    type: [4],
  },
  {
    h3: "다빈치 코드",
    play: [0, 1, 2, 3],
    people: [1, 2, 3],
    age: [0, 1, 2, 3, 4],
    type: [4],
  },
  {
    h3: "라스베가스",
    play: [0, 1, 2, 3],
    people: [1, 2, 3, 4],
    age: [1, 2, 3, 4],
    type: [4],
  },
  {
    h3: "할리갈리",
    play: [0, 1, 2, 3],
    people: [1, 2, 3, 4, 5],
    age: [0, 1, 2, 3, 4],
    type: [4],
  },
  {
    h3: "우봉고",
    play: [0, 1, 2, 3],
    people: [0, 1, 2, 3],
    age: [1, 2, 3, 4],
    type: [4],
  },
  {
    h3: "모자가 아니잖아",
    play: [0, 1, 2, 3],
    people: [2, 3, 4, 5, 6, 7],
    age: [1, 2, 3, 4],
    type: [4],
  },
  {
    h3: "카르카손",
    play: [1, 2, 3],
    people: [1, 2, 3, 4],
    age: [1, 2, 3, 4],
    type: [0, 4],
  },
  {
    h3: "챠오챠오",
    play: [0, 1, 2, 3],
    people: [1, 2, 3, 4],
    age: [1, 2, 3, 4],
    type: [4],
  },
  {
    h3: "젝스 님트",
    play: [0, 1, 2, 3],
    people: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    age: [1, 2, 3, 4],
    type: [4],
  },
  {
    h3: "독수리 눈치싸움",
    play: [0, 1, 2, 3],
    people: [1, 2, 3, 4],
    age: [1, 2, 3, 4],
    type: [4],
  },
  {
    h3: "보난자",
    play: [1, 2, 3],
    people: [2, 3, 4],
    age: [1, 2, 3, 4],
    type: [3, 4],
  },
  {
    h3: "바퀴벌레 포커",
    play: [0, 1, 2, 3],
    people: [1, 2, 3, 4, 5],
    age: [1, 2, 3, 4],
    type: [4],
  },
  {
    h3: "텔레스트레이션",
    play: [0, 1, 2, 3],
    people: [3, 4, 5, 6, 7],
    age: [1, 2, 3, 4],
    type: [2],
  },
  {
    h3: "사보타지",
    play: [0, 1, 2, 3],
    people: [2, 3, 4, 5, 6, 7, 8, 9],
    age: [1, 2, 3, 4],
    type: [1, 2, 4],
  },
  {
    h3: "5초 준다",
    play: [0, 1, 2, 3],
    people: [2, 3, 4, 5, 6, 7, 8, 9],
    age: [1, 2, 3, 4],
    type: [4],
  },
  {
    h3: "딕싯",
    play: [0, 1, 2, 3],
    people: [2, 3, 4, 5, 6, 7],
    age: [1, 2, 3, 4],
    type: [0, 4],
  },
  {
    h3: "요트 다이스",
    play: [1, 2, 3],
    people: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    age: [1, 2, 3, 4],
    type: [4],
  },
  {
    h3: "카탄",
    play: [1, 2, 3],
    people: [2, 3],
    age: [1, 2, 3, 4],
    type: [2, 4],
  },
  {
    h3: "노 땡스",
    play: [1, 2, 3],
    people: [2, 3, 4, 5, 6, 7],
    age: [1, 2, 3, 4],
    type: [4],
  },
  {
    h3: "레지스탕스 아발론",
    play: [1, 2, 3],
    people: [4, 5, 6, 7, 8, 9],
    age: [2, 3, 4],
    type: [1, 2, 4],
  },
  {
    h3: "뱅",
    play: [1, 2, 3],
    people: [3, 4, 5, 6],
    age: [1, 2, 3, 4],
    type: [1, 2, 4],
  },
  {
    h3: "딥 씨 크루",
    play: [0, 1, 2, 3],
    people: [1, 2, 3, 4],
    age: [1, 2, 3, 4],
    type: [2],
  },
  {
    h3: "용스팬",
    play: [0, 1, 2, 3],
    people: [0, 1, 2, 3, 4],
    age: [3, 4],
    type: [0, 4],
  },
  {
    h3: "푸에르토리코 1897",
    play: [1, 2, 3],
    people: [1, 2, 3, 4],
    age: [2, 3, 4],
    type: [4],
  },
  {
    h3: "아컴호러 카드 게임",
    play: [1, 2, 3],
    people: [0, 1, 2, 3],
    age: [3, 4],
    type: [0, 2],
  },
  {
    h3: "버거 마스터",
    play: [0, 1, 2, 3],
    people: [0, 1, 2, 3, 4, 5],
    age: [1, 2, 3, 4],
    type: [4],
  },
  {
    h3: "비버는 건축 중",
    play: [1, 2, 3],
    people: [1, 2, 3],
    age: [1, 2, 3, 4],
    type: [4],
  },
  {
    h3: "커피 러시",
    play: [0, 1, 2, 3],
    people: [1, 2, 3],
    age: [1, 2, 3, 4],
    type: [4],
  },
  {
    h3: "퍼니 버니",
    play: [0, 1, 2, 3],
    people: [1, 2, 3],
    age: [0, 1, 2, 3, 4],
    type: [4],
  },
  {
    h3: "크베들린부르크의 돌팔이 약장수 대결",
    play: [0, 1, 2, 3],
    people: [1],
    age: [1, 2, 3, 4],
    type: [4],
  },
];

//boardgame h3
const boardgameH3 = document.querySelectorAll(".boardgame h3");

let play = document.querySelector("#play").children;
play = Array.from(play);
let people = document.querySelector("#people").children;
people = Array.from(people);
let age = document.querySelector("#age").children;
age = Array.from(age);
let type = document.querySelector("#type").children;
type = Array.from(type);

play.forEach((element, i) => {
  element.addEventListener("click", () => {
    const boardgameArr1 = boardgameArr.filter((elem) => {
      return elem.play.includes(i);
    });

    boardgame.forEach((game) => {
      game.style.display = "none";
    });

    boardgameArr1.forEach((ele) => {
      boardgameH3.forEach((name, i) => {
        if (ele.h3 == name.innerText) {
          boardgame[i].style.display = "block";
        }
      });
    });
  });
});
