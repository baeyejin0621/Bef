"use strict";

/*보드게임 썸네일 정사각형으로 유지하기*/
//.boardgame
let boardgame = Array.from(document.querySelectorAll(".boardgame"));

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

/*더보기 버튼 클릭하면 숨겨진 보드게임들 나오기*/
//더보기 버튼
const moreBtn = document.querySelector("#more");

//5번째 줄부터 보드게임 숨기기
let hiddenBoard = boardgame.filter((element) => {
  return getComputedStyle(element).display == "none";
});

moreBtn.addEventListener("click", () => {
  hiddenBoard.forEach((element, i, arr) => {
    //4줄씩 숨겨진 보드게임 보이기
    if (i < 16) {
      element.style.display = "block";
    }

    //보여진 애들 빼고 아직 숨겨져있는 애들만 다시 배열에 담기
    arr = boardgame.filter((element) => {
      return getComputedStyle(element).display == "none";
    });

    hiddenBoard = arr;
  });

  //더이상 숨겨져 있는 보드게임이 없으면 더보기 버튼 숨기기

  let hiddenBoardNum = boardgame.find((element) => {
    return getComputedStyle(element).display == "none";
  });

  if (!hiddenBoardNum) {
    moreBtn.style.display = "none";
  }
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

    //더보기 버튼 없애기
    moreBtn.style.display = "none";
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
const boardgameH3 = Array.from(document.querySelectorAll(".boardgame h3"));

//boardgame 이름
const boardName = [];
boardgameH3.forEach((element) => {
  boardName.push(element.innerText);
});

//키워드
//보드게임 숙련도
let play = Array.from(document.querySelector("#play").children);
//인원
let people = Array.from(document.querySelector("#people").children);
//나이
let age = Array.from(document.querySelector("#age").children);
//유형
let type = Array.from(document.querySelector("#type").children);

/*키워드 설정하면 그 키워드에 맞는 보드게임 보이기*/
keyword.forEach((element) => {
  element.addEventListener("click", () => {
    //클릭된 키워드
    let playKey = play.find((elem) => {
      return getComputedStyle(elem).color == "rgb(255, 255, 255)";
    });
    playKey = play.indexOf(playKey);

    let peopleKey = people.find((elem) => {
      return getComputedStyle(elem).color == "rgb(255, 255, 255)";
    });
    peopleKey = people.indexOf(peopleKey);

    let ageKey = age.find((elem) => {
      return getComputedStyle(elem).color == "rgb(255, 255, 255)";
    });
    ageKey = age.indexOf(ageKey);

    let typeKey = type.find((elem) => {
      return getComputedStyle(elem).color == "rgb(255, 255, 255)";
    });
    typeKey = type.indexOf(typeKey);

    //편하게 편집할 보드게임 객체들을 담은 배열
    let showBoard = boardgameArr;

    if (playKey > -1) {
      showBoard = showBoard.filter((elem) => {
        return elem.play.includes(playKey);
      });
    }

    if (peopleKey > -1) {
      showBoard = showBoard.filter((elem) => {
        return elem.people.includes(peopleKey);
      });
    }

    if (ageKey > -1) {
      showBoard = showBoard.filter((elem) => {
        return elem.age.includes(ageKey);
      });
    }

    if (typeKey > -1) {
      showBoard = showBoard.filter((elem) => {
        return elem.type.includes(typeKey);
      });
    }

    boardgameArr.forEach((elem, i) => {
      if (showBoard.includes(elem)) {
        boardgame[i].style.display = "block";
      } else {
        boardgame[i].style.display = "none";
      }
    });
  });
});
