document.addEventListener("DOMContentLoaded", function () {
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

    // Posicion sticky no tapa titulos
    const navigationHeight = d.querySelector(".nav-primary").offsetHeight;

    d.documentElement.style.setProperty("--scroll-padding", navigationHeight + "px");

    // Animacion de transicion
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    const hiddenElements = d.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    // Función para agregar o quitar la clase "sticky-nav" según la posición de desplazamiento
    const navPrimary = d.querySelector(".nav-primary");
    const scrollWatcher = d.createElement("div");

    scrollWatcher.setAttribute("data-scroll-watcher", "");
    navPrimary.before(scrollWatcher);

    const navOberserver = new IntersectionObserver((entries) => {
        navPrimary.classList.toggle("sticky-nav", !entries[0].isIntersecting);
    });

    navOberserver.observe(scrollWatcher);
});
