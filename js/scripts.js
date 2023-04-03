// menu
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

// tab
const featuresOption = Array.from(document.querySelectorAll(".features-option"));
const featuresTab = Array.from(document.querySelectorAll(".features-tab"));

function changeTab(option) {
	featuresTab.forEach((tab, index) => {
		if (index === option) {
			tab.setAttribute("data-open", "true");
		} else {
			tab.setAttribute("data-open", "false");
		}
	});
}

featuresOption.forEach((option, index) => {
	option.addEventListener("click", (event) => {
		featuresOption.filter((wrongOption) => {
			if (wrongOption !== event.target) {
				wrongOption.setAttribute("data-active", "false");
			} else {
				event.target.setAttribute("data-active", "true");
				changeTab(+event.target.dataset.option);
			}
		});
	});
});
