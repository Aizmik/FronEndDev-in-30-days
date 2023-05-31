// have no idea what i'm doing but i have no idea how to do it with html and css so let's go 

const expander = document.querySelector(".adidas-menu")
const dropdownMenu = document.querySelector(".dropdown-menu");

expander.addEventListener("click", () => {
    expander.classList.toggle("active");
    dropdownMenu.classList.toggle("active");
})

dropdownMenu.querySelectorAll("a").forEach(n => n.addEventListener("click",
() => {
    expander.classList.remove("active");
    dropdownMenu.classList.remove("active");
}))
