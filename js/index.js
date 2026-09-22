const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add("is-visible");
  } else {
    backToTopButton.classList.remove("is-visible");
  }
});
