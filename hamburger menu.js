const toggle = document.getElementsByClassName("toggle-button")[0];
const filler = document.getElementsByClassName("nav-ul")[0];


toggle.addEventListener("click", fix);

function fix() {
    if (filler.style.display === "none") {
        filler.style.display = "flex";
    } else {
        filler.style.display = "none";
    }
    console.log('hola')
}