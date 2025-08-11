const btn = document.querySelectorAll(".btn");
const display = document.querySelector(".display");

let body = "";

btn.forEach((button) => {
  button.addEventListener("click", clickHandler);
});

document.addEventListener("keydown", (e) => {
  const key = e.key;
  const keys = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "*",
    "/",
    "=",
    "C",
    "Backspace",
    ".",
    "Enter",
  ];

  if (keys.includes(key)) {
    const button = Array.from(btn).find((btn) => btn.dataset.value === key);
    if (button) {
      button.click();
    } else if (key === "Enter") {
      const equalButton = Array.from(btn).find(
        (btn) => btn.dataset.value === "="
      );
      if (equalButton) {
        equalButton.click();
      }
    } else if (key === "Backspace") {
      const backButton = Array.from(btn).find(
        (btn) => btn.dataset.value === "Backspace"
      );
      if (backButton) {
        backButton.click();
      }
    }
  }
});

function clickHandler(e) {
  const value = e.target.getAttribute("data-value");

  if (value === "=") {
    try {
      const result = eval(body);
      body = "";
      display.textContent = result;
    } catch (err) {
      display.textContent = "Error";
      body = "";
    }
  } else if (value === "C") {
    body = "";
    display.textContent = "";
  } else if (value === "Backspace") {
    body = body.slice(0, body.length - 1);
    display.textContent = body;
  } else {
    body += value;
    display.textContent = body;
  }
}
