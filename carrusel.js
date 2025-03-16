document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".testimonials-container");
    const cards = document.querySelectorAll(".testimonial-card");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let index = 0;
    const visibleCards = 3; // Número de tarjetas visibles a la vez
    const totalCards = cards.length;

    function updateCarousel() {
        const cardWidth = cards[0].offsetWidth + 20; // Ancho de la tarjeta + gap
        container.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    nextBtn.addEventListener("click", function () {
        if (index < totalCards - visibleCards) {
            index++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener("click", function () {
        if (index > 0) {
            index--;
            updateCarousel();
        }
    });

    // Ajusta el contenedor para mostrar las tarjetas en fila
    container.style.display = "flex";
    container.style.overflow = "hidden";
    container.style.transition = "transform 0.5s ease";
});
