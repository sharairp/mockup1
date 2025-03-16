document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".plan").forEach((plan) => {
      plan.addEventListener("click", function () {
        document.querySelectorAll(".plan").forEach((p) => p.classList.remove("selected"));
        this.classList.add("selected");
      });
    });
  });
  

  document.getElementById("scroll-btn").addEventListener("click", function() {
    document.getElementById("next-section").scrollIntoView({ behavior: "smooth" });
});




