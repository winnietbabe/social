const checkbox = document.getElementById('checkbox');
const lightMode = [document.body, document.cont1]

checkbox.addEventListener('change', () => {
    lightMode[0].classList.toggle('light')
});