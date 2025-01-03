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

const displayWarning = document.getElementById("x-icon");
const warning = document.getElementById("alert-messsage");

const alert_message1 = document.getElementById("alert-message");

displayWarning.addEventListener("click", () =>
  alert_message1.classList.remove("alert")
);

//Reference every form element in the form element in thee form
const form = document.getElementById("form");
const email = document.getElementById("id_email");
const password = document.getElementById("id_password");
const errorMessage = document.getElementById("alert_message");

const password_error = document.getElementById("password_error");
const email_error = document.getElementById("email_error");
const alert_message2 = document.getElementById("alert_message");
const success_message = document.getElementById("success_message");

window.addEventListener("message", (e) => {
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    const email_validate =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    //
    if (password.value === "" || password.value == null) {
      e.preventDefault();
      password_error.innerHTML = "Password is required";
      password_error.parentElement.classList.add("incorrect");
    } else {
      email_error.innerHTML = "Pass";
      password_error.parentElement.classList.add("correct");
    }

    if (password.value.length <= 7) {
      e.preventDefault();

      password_error.innerHTML = "Password must be more than 7 characters";
      password_error.parentElement.classList.add("incorrect");
      alert_message1.classList.add("alert");
    } else {
      password_error.innerHTML = "Password correct";
      password_error.parentElement.classList.add("correct");
      password_error.style.color = "#2ac940";
      alert_message1.classList.remove("alert");
    }

    if (email.value === "" || email.value == null) {
      e.preventDefault();
      email_error.innerHTML = "Email is requirred";
      email_error.parentElement.classList.add("incorrect");
    }

    if (!email.value.match(email_validate)) {
      e.preventDefault();
      email_error.innerHTML = "Email Incorrect";
      email_error.parentElement.classList.add("incorrect");
      alert_message1.classList.add("alert");
      alert_message2.classList.add("error_display");
      success_message.classList.remove("success_display");
    } else {
      email_error.innerHTML = "Email Correct";
      email_error.parentElement.classList.add("correct");
      email_error.style.color = "#2ac940";
      success_message.classList.add("success_display");
      alert_message2.classList.remove("error_display");
    }

    if (password.value.length >= 8 && email.value.match(email_validate)) {
      e.preventDefault();
      setTimeout(function () {
        e.target.submit();
      }, 5000);
    }
  });
});
