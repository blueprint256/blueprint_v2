// main.js

// Get references to DOM elements
const form = document.getElementById("signup");
const codeInput = document.getElementById("code");
const infoInput = document.getElementById("information");
const submitButton = form.querySelector("button");

// Handle submit button click
submitButton.addEventListener("click", function () {
  const code = codeInput.value.trim();
  const info = infoInput.value.trim();

  // Simple validation
  if (!code || !info) {
    alert("Please fill in both fields.");
    return;
  }
  //   Get date
  const today = new Date().toISOString().split("T")[0];
  console.log(today);
  // Row addition
  let url =
    "https://api.sheety.co/5e46cca6be69d5aeb3b924b96bb2b5aa/clientFeedback/sheet1";
  let body = {
    sheet1: { date: today, code: code, information: info },
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json.sheet1);
    });

  // Example: show success message
  alert("Form submitted successfully!");

  // Optional: reset form
  form.reset();
});
