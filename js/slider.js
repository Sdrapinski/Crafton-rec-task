console.log("ok");
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

var sliderCurrentValue = 0;
const slider = (value, currValue = sliderCurrentValue) => {
  const navdots = document.querySelectorAll(".navigation__dots div");
  if (currValue + value !== navdots.length && currValue + value >= 0) {
    navdots.forEach((el, index) => {
      if (currValue + value === index) {
        el.style.backgroundColor = "#FFCD19";
      } else {
        el.style.backgroundColor = "white";
      }
    });
    sliderCurrentValue = currValue + value;
  } else if (currValue + value > navdots.length - 1) {
    sliderCurrentValue = 0;
    slider(0);
  } else if (currValue + value < 0) {
    sliderCurrentValue = navdots.length - 1;
    slider(0);
  }
};
slider(0);
