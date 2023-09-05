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
    function toggleStickyNav() {
        const isSticky = window.scrollY >= navPrimaryTop;
        navPrimary.classList.toggle("sticky-nav", isSticky);
    }

    // Elemento .nav-primary y su posición superior
    const navPrimary = document.querySelector(".nav-primary");
    const navPrimaryTop = navPrimary.offsetTop;

    // Evento de desplazamiento para llamar a toggleStickyNav
    window.addEventListener("scroll", toggleStickyNav);

    // Llamada inicial para verificar el estado en la parte superior
    toggleStickyNav();
});
