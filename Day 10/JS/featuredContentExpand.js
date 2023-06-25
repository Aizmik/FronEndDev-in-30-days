const expanderButton = document.querySelector(".bottle-cap");
const content = document.querySelector(".featured-content");


// Gotta admit, the syntaxis is mad crazy 
expanderButton.addEventListener("click", () => {
    content.classList.toggle("active");
})