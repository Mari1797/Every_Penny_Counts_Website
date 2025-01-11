let showIcon = document.getElementById("eyeicon");
let passwordField = document.getElementById("id_password");

showIcon.addEventListener("click", () => toggle(passwordField, showIcon));

const toggle = (passwordField, icon) => {
  const visibe = passwordField.type === "text";
  if (visibe) {
    passwordField.type = "password";
    icon.classList.add("display");
  } else {
    passwordField.type = "text";
    icon.classList.remove("display");
  }
};

let showIcon1 = document.getElementById("eyeicon1");
let passwordField1 = document.getElementById("id_password1");

showIcon1.addEventListener("click", () => toggle1(passwordField1, showIcon1));

const toggle1 = (passwordField1, icon1) => {
  const visibe = passwordField1.type === "text";
  if (visibe) {
    passwordField1.type = "password";
    icon1.classList.add("close_image");
  } else {
    passwordField1.type = "text";
    icon1.classList.remove("close_image");
  }
};

const new_password = document.getElementById("id_password");
const confirm_password = document.getElementById("id_password1");
const password_error = document.getElementById("password_error");
const password_error1 = document.getElementById("password_error1");

const displayWarning = document.getElementById("x-icon");
const warning = document.getElementById("alert-messsage");

const alert_message1 = document.getElementById("alert-message");

displayWarning.addEventListener("click", () =>
  alert_message1.classList.remove("alert")
);

window.addEventListener("message", (e) => {
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    const checkPassword = () => {
      if (new_password.value === confirm_password.value) {
        password_error.innerHTML = "Passwords match";
        password_error1.innerHTML = "Passwords match";
        password_error.style.color = "#046C4E";
        password_error1.style.color = "#046C4E";
        password_error.parentElement.classList.add("correct");
        password_error1.parentElement.classList.add("correct");
        password_error.parentElement.classList.remove("incorrect");
        password_error1.parentElement.classList.remove("incorrect");
        alert_message1.classList.add("alert");
        e.preventDefault();
        setTimeout(function () {
          e.target.submit();
        }, 5000);
      } else {
        e.preventDefault();
        password_error.parentElement.classList.add("incorrect");
        password_error1.parentElement.classList.add("incorrect");
        password_error.innerHTML = "Passwords don't match";
        password_error1.innerHTML = "Passwords don't match";
      }
    };
    if (new_password.value === "" || new_password.value.length <= 8) {
      e.preventDefault();
      password_error.innerHTML = "Password must be more than 8 digits";
      password_error.parentElement.classList.add("incorrect");
    } else if (new_password.value != "" || new_password.value.length != 8) {
      checkPassword();
    } else {
    }
    if (confirm_password.value === "" || confirm_password.value.length <= 8) {
      e.preventDefault();
      password_error1.innerHTML = "Password must be more than 8 digits";
      password_error1.parentElement.classList.add("incorrect");
    } else if (
      confirm_password.value != "" ||
      confirm_password.value.length != 8
    ) {
      checkPassword();
    }
  });
});
// window.addEventListener("message", (event) => {
//   let $myForm = document.querySelector("form");
//   console.log($myForm);

//   $myForm.addEventListener("submit", function (ev) {
//     ev.preventDefault();
//     setTimeout(function () {
//       ev.target.submit();
//     }, 20000);
//   });
// });
