const input = document.querySelector('input#name-input');
const span = document.querySelector('span#name-output');
input.addEventListener('input', () => {
    const value = input.value.trim();

    span.textContent = value === '' ? 'Anonymous' : value;
});

