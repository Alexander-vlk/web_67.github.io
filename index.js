const select = document.getElementById("list");
const input = document.getElementById("count");
const output = document.getElementById("answer");
const errorlog = document.getElementById("errorlog");

calculate = () => {
    if (isNaN(input.value) || input.value < 0) { // валидация данных
        errorlog.style.display = "block";
        errorlog.innerText = "Ошибка, введенные данные некорректны";
        return -1;
    }
    errorlog.style.display = "none";
    output.innerText = select.value * input.value;
}

const button = document.getElementById("button");
window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    button.addEventListener("click", calculate);
});
