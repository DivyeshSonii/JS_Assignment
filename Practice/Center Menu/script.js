let a = document.querySelector(".tbtn");
let b = document.querySelector(".nav");

a.addEventListener("click", function () {
    b.classList.add("nav_toggle");
})

let c = document.querySelector(".cbtn");
c.addEventListener("click", function () {
    b.classList.remove("nav_toggle");
})