const menu = document.getElementById("menu");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");

function toggleMenu(open) {
	menu.setAttribute("data-open", open);
}

openMenu.addEventListener("click", () => {
	toggleMenu("true");
});

closeMenu.addEventListener("click", () => {
	toggleMenu("false");
});
