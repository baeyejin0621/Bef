"use strict";

//아이디, 비밀번호 입력창
const userInput = document.querySelectorAll("#login input");
//로그인 버튼
const loginBtn = document.querySelector("#account");

userInput.forEach((ele) => {
  ele.addEventListener("change", () => {
    if (ele.value) {
      loginBtn.style.backgroundColor = "var(--sub-color1)";
    } else {
      loginBtn.style.backgroundColor = "var(--black-color7)";
    }
  });
});
