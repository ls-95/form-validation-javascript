//please complete all required fields

let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

function validateName() {
  let name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  } else if (!name.match(/^[A-Za-z]+(\s[A-Za-z]+)$/)) {
    nameError.innerHTML = "Enter a valid first and last name";
    return false;
  } else {
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
}

function validatePhone() {
  let phone = document.getElementById("contact-phone").value;

  if (phone.length == 0) {
    phoneError.innerHTML = "Phone number is required";
    return false;
  } else if (
    !phone.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)
  ) {
    phoneError.innerHTML = "Enter a valid phone number";
    return false;
  } else {
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
}

function validateEmail() {
  let email = document.getElementById("contact-email").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  } else if (!email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
    emailError.innerHTML = "Enter a valid email address";
    return false;
  } else {
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
}
