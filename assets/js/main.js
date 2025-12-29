document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.getElementById("back-to-top");
  if (!backToTop) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 180) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
