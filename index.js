let nameInput = document.getElementById("Name");
let emailInput = document.getElementById("Email");
let commentInput = document.getElementById("Comment");
let signUpButton = document.getElementById("addsignUpButton");
let contactForm = document.getElementById("contactForm");

addsignUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  let name = new nameInput(nameInput.value);
  let email = new emailInput(emailInput.value);
  let commentInput = new commentInput(commentInput.value);
  contactForm.push(nameInput, emailInput);
  contactForm.reset();
  console.log(contactForm);
});
