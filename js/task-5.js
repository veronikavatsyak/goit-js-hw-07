const button = document.querySelector(".change-color");
const textColor = document.querySelector(".color");
button.addEventListener("click", handleClick);
function handleClick(event) {
  const random = getRandomHexColor();
  document.body.style.backgroundColor = random;
  textColor.textContent = random;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
