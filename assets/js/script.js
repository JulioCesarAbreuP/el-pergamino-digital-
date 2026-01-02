<script>
/*
  Script base – El Pergamino Digital
  Preparado para:
  - Animaciones
  - Toggle de secciones
  - Validaciones futuras
*/

document.addEventListener("DOMContentLoaded", () => {
  console.log("Lab 21 cargado correctamente.");

  // Ejemplo: resaltar secciones al hacer scroll (placeholder)
  const headers = document.querySelectorAll("h2");
  headers.forEach(h => {
    h.addEventListener("mouseenter", () => {
      h.style.color = "#ffd56b";
    });
    h.addEventListener("mouseleave", () => {
      h.style.color = "";
    });
  });
});
</script>
</head>
