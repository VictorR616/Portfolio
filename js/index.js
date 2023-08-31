document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.querySelector(".navegacion");
    const links = document.querySelectorAll(".navegacion a");

    const d = document;
    d.addEventListener("click", (e) => {
        // Si el elemento objetivo del evento coincide con el selector de menuToggle
        if (e.target.matches("#menu-toggle") || e.target.matches("#menu-toggle *")) {
            // Alterna la clase "open" en el elemento correspondiente a menu y menuToggle
            d.querySelector(".navegacion").classList.toggle("open");
            d.querySelector("#menu-toggle").classList.toggle("open");
        }

        // Si el elemento objetivo del evento coincide con el selector de links
        if (e.target.matches(".navegacion a")) {
            // Eliminar la clase "open" de ambos elementos
            d.querySelector(".navegacion").classList.remove("open");
            d.querySelector("#menu-toggle").classList.remove("open");
        }
    });
});
