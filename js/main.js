function fadeIn() {
    document.querySelector(".prime_article").classList.toggle("fade")
    document.querySelector(".main_title").classList.toggle("title_fade")
}

function showMenu() {
    document.querySelector(".drop-down").classList.toggle("show")
    document.querySelector(".drop_button").classList.toggle("rotate")
}

document.querySelector(".drop_button").addEventListener("click", showMenu)
window.addEventListener("load", fadeIn)

