document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.getElementById("back-to-top");

  // Mostrar/ocultar botón volver arriba
  window.addEventListener("scroll", () => {
    if (window.scrollY > 180) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  });

  // Acción del botón
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
