export function burgerMenu() {
  const burgerMenu = document.querySelector(".header__burger-menu");

  burgerMenu.addEventListener("click", function (item) {
    // item.classList.toggle("active");
    console.log("clicked");
  });
}
