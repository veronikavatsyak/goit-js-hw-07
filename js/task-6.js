const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const box = document.querySelector('#boxes');
createBtn.addEventListener("click", handleClick);
function handleClick() {
  if (+input.value < 1 || +input.value > 100) {
    return;
  }
  createBoxes(+input.value)
  
} 
function createBoxes(amount) {
  const arr = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const boxes = document.createElement("div");
    boxes.style.width = `${size}px`;
    boxes.style.height = `${size}px`;
    boxes.style.backgroundColor = getRandomHexColor();
    size += 10;
    arr.push(boxes);
  }
  box.innerHTML = "";
  box.append(...arr);
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
destroyBtn.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  box.innerHTML = "";
  input.value = "";
}
