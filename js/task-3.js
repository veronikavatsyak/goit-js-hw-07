const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');
const text = document.querySelector('h1');
text.classList.add('text');
input.addEventListener('input', (event) => {
    const trimmedInput = event.target.value.trim();
    if (trimmedInput) {
        return span.textContent = trimmedInput;
    } else {
        return span.textContent = 'Anonymous';
    }
})