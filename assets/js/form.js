const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const phoneInput = document.getElementById("phone-input");
const messageInput = document.getElementById("message-input");
const formSubmit = document.getElementById("form-submit");

formSubmit.addEventListener("click", async e => {
  let data = {
    date: new Date().toLocaleString(),
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    message: messageInput.value,
  };

  await fetch("https://sheet.best/api/sheets/7ac5176a-6691-4067-9188-6a14e4ae4059", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
});
