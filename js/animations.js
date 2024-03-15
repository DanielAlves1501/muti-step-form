export const step2Animations = () => {
  setTimeout(() => {
    const planBtn = document.querySelector(".payment__btn");
    const monthlyPlan = document.querySelector(".monthly");
    const yearlyPlan = document.querySelector(".yearly");
    const cards = document.querySelectorAll(".card");

    planBtn.addEventListener("click", (e) => {
      e.preventDefault();

      if (planBtn.style.transform == "translateX(-70%)") {
        monthlyPlan.classList.remove("payment__mode--active");
        planBtn.style.transform = "translateX(70%)";
        yearlyPlan.classList.add("payment__mode--active");
      } else {
        yearlyPlan.classList.remove("payment__mode--active");
        planBtn.style.transform = "translateX(-70%)";
        monthlyPlan.classList.add("payment__mode--active");
      }
    });

    cards.forEach((card) => {
      card.addEventListener("click", () => {
        // Remover la clase card--active de todas las cards
        cards.forEach((c) => c.classList.remove("card--active"));

        // Agregar la clase card--active solo a la card clickeada
        card.classList.add("card--active");
      });
    });
  }, 100);
};
