// Cursor blink effect
const title = document.querySelector("header.hero h1");
if (title) {
  const cursor = document.createElement("span");
  cursor.textContent = "_";
  cursor.style.animation = "blink 1s step-start infinite";
  cursor.style.color = "#00ff99";
  title.appendChild(cursor);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const text = "Aspiring Cyber Security Analyst.";
const typingTarget = document.getElementById("typing");
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingTarget.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 75); // Speed of typing (ms)
  }
}

window.addEventListener("DOMContentLoaded", typeEffect);
