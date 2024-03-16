export const step2Animations = () => {
  setTimeout(() => {
    const planBtn = document.querySelector(".payment__btn");
    const monthlyPlan = document.querySelector(".monthly");
    const yearlyPlan = document.querySelector(".yearly");
    const cards = document.querySelectorAll(".card");
    const cardPrice = document.querySelectorAll(".card__price");

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

      if (planBtn.style.transform == "translateX(-70%)") {
        cardPrice[0].textContent = "$9/mo";
        cardPrice[1].textContent = "$12/mo";
        cardPrice[2].textContent = "$15/mo";
      } else {
        cardPrice[0].textContent = "$90/yr";
        cardPrice[1].textContent = "$120/yr";
        cardPrice[2].textContent = "$150/yr";
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
