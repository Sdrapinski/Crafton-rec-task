const dropdownFooter = () => {
  const mainLi = document.querySelectorAll(".footer__links ul li.li--first");
  mainLi.forEach((el, index) => {
    el.addEventListener("click", () => {
      const siblings = document.querySelectorAll(
        `.footer__links ul:nth-child(${index + 1}) li`
      );
      siblings.forEach((sib) => {
        sib.classList.toggle("li--vis");
      });
      el.classList.toggle("li__arrow--down");
    });
  });
};

dropdownFooter();
