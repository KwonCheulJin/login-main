"use strict";

const logoutBtn = document.getElementById('button');
// console.log(logoutBtn);

logoutBtn.addEventListener("click", logout);

function logout() {
  fetch("/logout", {
    method: "GET",
  })
    .then(res => {
      if (res.status === 200) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("로그인 중 에러 발생");
    });
  console.log(res);
}