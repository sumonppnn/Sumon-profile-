
const text = ["Web Developer", "Frontend Designer", "Freelancer"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const typingElement = document.querySelector(".typing-text");

function type() {
  if (index >= text.length) index = 0;
  currentText = text[index];
  typingElement.textContent = currentText.substring(0, charIndex);

  if (!isDeleting) {
    charIndex++;
    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(type, 1500);
      return;
    }
  } else {
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      index++;
    }
  }
  setTimeout(type, isDeleting ? 60 : 120);
}

document.addEventListener("DOMContentLoaded", type);
