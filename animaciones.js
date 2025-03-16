document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const revealSection = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight * 0.85;

            if (sectionTop < windowHeight) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    };

    window.addEventListener("scroll", revealSection);
    revealSection();
});
