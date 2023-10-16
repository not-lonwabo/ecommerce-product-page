document.querySelector(".menu-logo a").addEventListener("click", showMenu);
document.querySelector(".nav-list img").addEventListener("click", hideMenu);

function showMenu() {
    document.querySelector(".nav-list").style.display = "block";
}

function hideMenu() {
    document.querySelector(".nav-list").style.display = "none";
}