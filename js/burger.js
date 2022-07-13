const burgerShow = () => {
  const links = document.querySelector(".navbar__links");
  const slider = document.querySelector(".slider__navbar");
  const burger = document.querySelector(".burger");

  burger.addEventListener("click", () => {
    links.classList.toggle("blok");
    slider.classList.add("sticky");
    burger.classList.toggle("close");
  });
};

burgerShow();
