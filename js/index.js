let showMenu = false;
const hamburguerMenu = document.querySelector("#hamburguer-menu");
const menuList = document.querySelector("#menu-list");
const hideMenuList = document.querySelector("#hide-hamburguer-menu");
const hamburguerButton = document.querySelector("#show-hamburguer-menu");

function checkMenuState() {
    if (showMenu) {
        hamburguerMenu.style.display = "none";
        menuList.style.display = "flex";
    } else {
        hamburguerMenu.style.display = "flex";
        menuList.style.display = "none";
    }
}

hamburguerButton.addEventListener("click", () => {
    showMenu = !showMenu;
    checkMenuState();
});

hideMenuList.addEventListener("click", () => {
    showMenu = !showMenu;
    checkMenuState();
});

// Disable hamburguer menu when windows resizes with a width over 1100px.
addEventListener("resize", () => {
    if (window.innerWidth >= 1100) {
        menuList.style.display = "none";
        hamburguerMenu.style.display = "none";
    }
});

addEventListener("resize", () => {
    if (window.innerWidth <= 1099) {
        hamburguerMenu.style.display = "flex";
    }
});
