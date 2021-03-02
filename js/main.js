document.querySelector(".drop_button").addEventListener("click", showMenu)

function showMenu() {
    document.querySelector(".drop-down").classList.toggle("show")
    document.querySelector(".drop_button").classList.toggle("rotate")
}