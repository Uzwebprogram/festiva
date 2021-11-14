
let form_check_input = document.querySelectorAll(".form-check-input")
let yakka = document.querySelector(".yakka")
let Groups = document.querySelector(".Groups")
form_check_input[0].addEventListener("change", () => {
    yakka.classList.add("show")
    yakka.classList.remove("hide")
    Groups.classList.add("hide")
    Groups.classList.remove("show")
})

form_check_input[1].addEventListener("change", () => {
    yakka.classList.remove("show")
    yakka.classList.add("hide")
    Groups.classList.remove("hide")
    Groups.classList.add("show")
})
let btn = document.querySelector(".royxat__oqish-joyi-yoq")
let btn2 = document.querySelector(".royxat__oqish-joyi-bor")
let inputs = document.querySelector(".scholl")
btn.addEventListener("click", () => {
    inputs.disabled = true
})
btn2.addEventListener("click", () => {
    inputs.disabled = false
})