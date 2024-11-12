const button = document.querySelector('.change-color');
const box = document.querySelector('.widget');
const textColor = document.querySelector('.color');
button.addEventListener("click", handleClick);
function handleClick(event) {
  box.style.backgroundColor = getRandomHexColor(); 
  textColor.textContent = getRandomHexColor();
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
