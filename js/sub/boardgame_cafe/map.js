"use strict";

// 마커를 담을 배열입니다
let markers = [];

let mapContainer = document.getElementById("map"), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
    level: 1, // 지도의 확대 레벨
  };

// 지도를 생성합니다
let map = new kakao.maps.Map(mapContainer, mapOption);

// 장소 검색 객체를 생성합니다
let ps = new kakao.maps.services.Places();

// 키워드로 장소를 검색합니다
searchPlaces();

// 키워드 검색을 요청하는 함수입니다
function searchPlaces() {
  let keyword = document.getElementById("keyword").value;

  if (!keyword.replace(/^\s+|\s+$/g, "")) {
    alert("키워드를 입력해주세요!");
    return false;
  }

  // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
  ps.keywordSearch(keyword, placesSearchCB);
}

// 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
function placesSearchCB(data, status, pagination) {
  if (status === kakao.maps.services.Status.OK) {
    // 정상적으로 검색이 완료됐으면
    // 검색 목록과 마커를 표출합니다
    displayPlaces(data);

    // 페이지 번호를 표출합니다
    displayPagination(pagination);
  } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
    alert("검색 결과가 존재하지 않습니다.");
    return;
  } else if (status === kakao.maps.services.Status.ERROR) {
    alert("검색 결과 중 오류가 발생했습니다.");
    return;
  }
}

// 검색 결과 목록과 마커를 표출하는 함수입니다
function displayPlaces(places) {
  let listEl = document.getElementById("placesList"),
    menuEl = document.getElementById("menu_wrap"),
    fragment = document.createDocumentFragment(),
    bounds = new kakao.maps.LatLngBounds(),
    listStr = "";

  // 검색 결과 목록에 추가된 항목들을 제거합니다
  removeAllChildNods(listEl);

  // 지도에 표시되고 있는 마커를 제거합니다
  removeMarker();

  for (let i = 0; i < places.length; i++) {
    // 마커를 생성하고 지도에 표시합니다
    let placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
      marker = addMarker(placePosition, i),
      itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다

    // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
    // LatLngBounds 객체에 좌표를 추가합니다
    bounds.extend(placePosition);

    fragment.appendChild(itemEl);

    //핀 이미지 배열로 가져오기
    let pinImg = Array.from(document.querySelectorAll("img"));
    pinImg = pinImg.filter((element) => {
      return getComputedStyle(element).width == "28px";
    });
    pinImg = pinImg.slice(2, -1); //맵 핀 이미지만 배열에 담기 완료

    //맵 핀 이미지 부모 div들 담은 배열
    let pinParent = [];
    pinImg.forEach((element) => {
      pinParent.push(element.parentNode);
    });

    /*마커 위에 마우스 올리면 말풍선으로 장소명 뜨기*/
    //태그 껍데기 만들기
    let placeName = document.createElement("div");
    let placeNameClass = document.createAttribute("class");
    placeNameClass.value = "place_name";
    placeName.setAttributeNode(placeNameClass);
    let placeNameText = document.createTextNode(places[i].place_name);
    placeName.appendChild(placeNameText);

    pinParent.forEach((element) => {
      element.appendChild(placeName);
      element.style.width = getComputedStyle(pinImg[0]).width;
    });

    //placeName 담은 배열
    const placeNameArr = document.querySelectorAll(".place_name");
    //리뷰 영역
    const reviewArea = document.querySelector(".review_area");
    //리뷰 영역 장소명
    const reviewTitle = document.querySelector(".left h4");

    //마우스 올리면 placeName 뜨기
    pinImg.forEach((element, index) => {
      element.addEventListener("mouseover", () => {
        placeNameArr[index].style.display = "block";
      });

      element.addEventListener("mouseout", () => {
        placeNameArr[index].style.display = "none";
      });

      element.addEventListener("click", () => {
        reviewTitle.innerText = placeNameArr[index].innerText;
        reviewArea.style.display = "flex";
        placeNameArr.forEach((elem) => {
          elem.style.display = "none";
        });
        placeNameArr[index].style.display = "block";
      });
    });

    /*검색 결과 항목에 마우스 올리면 해당 placeName 뜨기*/
    itemEl.addEventListener("mouseover", () => {
      placeName.style.display = "block";
      panTo();
    });

    itemEl.addEventListener("mouseout", () => {
      placeName.style.display = "none";
    });

    itemEl.addEventListener("click", () => {
      reviewTitle.innerText = placeNameArr[i].innerText;
      reviewArea.style.display = "flex";
      placeNameArr.forEach((elem) => {
        elem.style.display = "none";
      });
      placeNameArr[index].style.display = "block";
    });

    function panTo() {
      // 지도 중심을 부드럽게 이동시킵니다
      // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
      map.panTo(placePosition);
    }
  }

  // 검색결과 항목들을 검색결과 목록 Element에 추가합니다
  listEl.appendChild(fragment);
  menuEl.scrollTop = 0;

  // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
  map.setBounds(bounds);
}

// 검색결과 항목을 Element로 반환하는 함수입니다
function getListItem(index, places) {
  let el = document.createElement("li"),
    itemStr =
      '<span class="markerbg marker_' +
      (index + 1) +
      '"></span>' +
      '<div class="info">' +
      "   <h5>" +
      places.place_name +
      "</h5>";

  if (places.road_address_name) {
    itemStr +=
      "    <span>" +
      places.road_address_name +
      "</span>" +
      '   <span class="jibun gray">' +
      places.address_name +
      "</span>";
  } else {
    itemStr += "    <span>" + places.address_name + "</span>";
  }

  itemStr += '  <span class="tel">' + places.phone + "</span>" + "</div>";

  el.innerHTML = itemStr;
  el.className = "item";

  return el;
}

// 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
function addMarker(position, idx, title) {
  let imageSrc =
      "../../../img/sub/boardgame_cafe/boardgame_cafe1/sec1/map_pin_filled.svg", // 마커 이미지 url, 커스텀 이미지
    imageSize = new kakao.maps.Size(28, 28), // 마커 이미지의 크기
    imgOptions = {
      offset: new kakao.maps.Point(13, 37), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
    },
    markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
    marker = new kakao.maps.Marker({
      position: position, // 마커의 위치
      image: markerImage,
    });

  marker.setMap(map); // 지도 위에 마커를 표출합니다
  markers.push(marker); // 배열에 생성된 마커를 추가합니다

  return marker;
}

// 지도 위에 표시되고 있는 마커를 모두 제거합니다
function removeMarker() {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}

// 검색결과 목록 하단에 페이지번호를 표시는 함수입니다
function displayPagination(pagination) {
  let paginationEl = document.getElementById("pagination"),
    fragment = document.createDocumentFragment(),
    i;

  // 기존에 추가된 페이지번호를 삭제합니다
  while (paginationEl.hasChildNodes()) {
    paginationEl.removeChild(paginationEl.lastChild);
  }

  for (let i = 1; i <= pagination.last; i++) {
    let el = document.createElement("a");
    el.href = "#";
    el.innerHTML = i;

    if (i === pagination.current) {
      el.className = "on";
    } else {
      el.addEventListener("click", (event) => {
        pagination.gotoPage(i);

        //a태그로의 버블링 막기
        event.preventDefault();
      });
    }

    fragment.appendChild(el);
  }
  paginationEl.appendChild(fragment);
}

// 검색결과 목록의 자식 Element를 제거하는 함수입니다
function removeAllChildNods(el) {
  while (el.hasChildNodes()) {
    el.removeChild(el.lastChild);
  }
}
