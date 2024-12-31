const form = document.getElementById("form");
const otp = document.getElementById("otp_id");
const otp_error = document.getElementById("verification_error");
const otp_warning = document.querySelector(".verification");

const success_message = document.getElementById("success_message");
const alert_message = document.getElementById("alert-message");

form.addEventListener("submit", (e) => {
  if (otp.value === "" || otp_warning <= 5) {
    e.preventDefault();
    otp_error.style.color = "#FA2B2B";
    otp_error.parentElement.classList.add("incorrect");
    success_message.classList.add("success_display");
    alert_message.classList.add("error_display");
    success_message.classList.remove("success_display");
  } else {
    otp_error.innerHTML = "";
    otp_error.parentElement.classList.add("correct");
    success_message.classList.add("success_display");
    alert_message.classList.remove("error_display");
  }
});
