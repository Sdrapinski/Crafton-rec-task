// form handler

const name = document.getElementById("name");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const form = document.getElementById("form");
const textarea = document.getElementById("textarea");

form.addEventListener("submit", (e) => {
  let arr = [];
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  let isOk = true;
  if (name.value === "" || name.value === null) {
    isOk = false;
    arr.push(name);
  }
  if (surname.value === "" || surname.value === null) {
    isOk = false;
    arr.push(surname);
  }
  if (textarea.value === "" || textarea.value === null) {
    isOk = false;
    arr.push(textarea);
  }
  if (email.value === "" || email.value === null || !email.match(pattern)) {
    isOk = false;
    arr.push(email);
  }
  if (!isOk) {
    console.log(arr);
    e.preventDefault();
    arr.forEach((el) => {
      el.classList.add("error");
      el.addEventListener("focus", () => {
        el.classList.remove("error");
      });
    });
  }
});
