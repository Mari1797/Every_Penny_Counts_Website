form = document.getElementById("form");
const email = document.getElementById("email_id");

const email_error = document.getElementById("email_error");
const alert_message = document.getElementById("alert-message");
const success_message = document.getElementById("success_message");

form.addEventListener("submit", (e) => {
  const email_validate =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email.value.match(email_validate)) {
    e.preventDefault();
    email_error.innerHTML = "Email Incorrect";
    email_error.parentElement.classList.add("incorrect");
    email_error.parentElement.classList.remove("correct");
    alert_message.classList.add("error_display");
    success_message.classList.remove("success_display");
    email_error.style.color = "#FA2B2B";
  } else {
    email_error.innerHTML = "Email correct";
    email_error.parentElement.classList.add("correct");
    email_error.style.color = "#2ac940";
    success_message.classList.add("success_display");
    alert_message.classList.remove("error_display");
  }
});
