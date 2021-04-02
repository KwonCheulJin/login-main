'use strict';

const id = document.querySelector('#id'),
  name = document.querySelector("#name"),
  pw = document.querySelector("#pw"),
  pwConfirm = document.querySelector("#pw-confirm"),
  signUpBtn = document.querySelector('#button');

signUpBtn.addEventListener("click", signUp);

function signUp() {
  const req = {
    id: id.value,
    name: name.value,
    pw: pw.value,
    pwConfirm: pwConfirm.value
  };
  console.log(req);
  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("회원가입 중 에러 발생");
    });
}