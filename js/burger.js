const burgerShow = () => {
  const links = document.querySelector(".navbar__links");
  const burger = document.querySelector(".burger");
  burger.addEventListener("click", () => {
    links.classList.toggle("blok");
  });
};

burgerShow();
