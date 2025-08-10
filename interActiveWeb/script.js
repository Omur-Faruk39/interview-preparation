const btn = document.getElementById("greetButton");
const userName = document.getElementById("nameInput").value;
btn.addEventListener("click", submitHandler);

function submitHandler() {
  const greetingParagraph = document.getElementById("greetingMessage");

  if (userName.trim() !== "") {
    greetingParagraph.textContent =
      "Hello, " + userName + "! Welcome to the page.";
  } else {
    greetingParagraph.textContent = "Please enter your name to get a greeting.";
  }
}
