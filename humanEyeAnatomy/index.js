import data from "./data.js";

const hamburger = document.querySelector(".hamburger");
const btns = document.querySelectorAll(".btn");
const modal = document.querySelector(".modal");

btns.forEach((btn) => {
  btn.addEventListener("click", modalOpener);
});

hamburger.addEventListener("click", function () {
  document.getElementById("navLinks").classList.toggle("active");
});

function modalOpener(e) {
  modal.classList.add("active");

  modal.innerHTML = `
  <button class="close btn">Close</button>
  <div>
  <div class="modal-image">
    <img src="${data[e.target.dataset.label].image}" alt="${
    data[e.target.dataset.label].heading
  }" />
  </div>
<div
class="article"
>
      <h2>${data[e.target.dataset.label].heading}</h2>
      <article>${data[e.target.dataset.label].article}</article>

  </div>

  
  </div>
`;

  const closeBtn = document.querySelector(".close");

  closeBtn.addEventListener("click", function () {
    modal.classList.remove("active");
  });
}
