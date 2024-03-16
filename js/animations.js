import { handlePlanSelected } from "./index.js";

let planInfo = {};

const handlePlanBtnInitValue = (monthlyPlan,planBtn,yearlyPlan,cardPrice)=>{
  if(planInfo.paymentMode == 'monthly'){
    yearlyPlan.classList.remove("payment__mode--active");
    planBtn.style.transform = "translateX(-70%)";
    monthlyPlan.classList.add("payment__mode--active");

    cardPrice[0].textContent = "$9/mo";
    cardPrice[1].textContent = "$12/mo";
    cardPrice[2].textContent = "$15/mo";

  } else{
    monthlyPlan.classList.remove("payment__mode--active");
    planBtn.style.transform = "translateX(70%)";
    yearlyPlan.classList.add("payment__mode--active");

    cardPrice[0].textContent = "$90/yr";
    cardPrice[1].textContent = "$120/yr";
    cardPrice[2].textContent = "$150/yr";

   
  }
}

const step2Animations = () => {
  setTimeout(() => {
    const planBtn = document.querySelector(".payment__btn");
    const monthlyPlan = document.querySelector(".monthly");
    const yearlyPlan = document.querySelector(".yearly");
    const cards = document.querySelectorAll(".card");
    const cardPrice = document.querySelectorAll(".card__price");

    handlePlanBtnInitValue(monthlyPlan,planBtn,yearlyPlan,cardPrice)


    planBtn.addEventListener("click", (e) => {
      e.preventDefault();

      let planStoredData = localStorage.getItem("planInformation");
      planInfo = JSON.parse(planStoredData);


      if (planBtn.style.transform == "translateX(-70%)") {
        monthlyPlan.classList.remove("payment__mode--active");
        planBtn.style.transform = "translateX(70%)";
        yearlyPlan.classList.add("payment__mode--active");

        cardPrice[0].textContent = "$90/yr";
        cardPrice[1].textContent = "$120/yr";
        cardPrice[2].textContent = "$150/yr";


        planInfo = {...planInfo,paymentMode: "yearly"};

        localStorage.setItem("planInformation",JSON.stringify(planInfo));
        console.log(localStorage);

      } else {
        yearlyPlan.classList.remove("payment__mode--active");
        planBtn.style.transform = "translateX(-70%)";
        monthlyPlan.classList.add("payment__mode--active");

        cardPrice[0].textContent = "$9/mo";
        cardPrice[1].textContent = "$12/mo";
        cardPrice[2].textContent = "$15/mo";

        planInfo = {...planInfo,paymentMode: "monthly"};

        localStorage.setItem("planInformation",JSON.stringify(planInfo));
        console.log(localStorage);
      }
    });

    cards.forEach((card) => {
      let planStoredData = localStorage.getItem("planInformation");

      if (planStoredData) {
        planInfo = JSON.parse(planStoredData);

        if (card.childNodes[3].firstElementChild.innerText == planInfo.plan) {
          card.classList.add("card--active");
        }
      }

      card.addEventListener("click", () => {
        // Remover la clase card--active de todas las cards
        cards.forEach((c) => c.classList.remove("card--active"));

        // Agregar la clase card--active solo a la card clickeada
        card.classList.add("card--active");

        planInfo = { plan: card.childNodes[3].firstElementChild.innerText, price:card.childNodes[3].childNodes[3].innerText};

        localStorage.setItem("planInformation", JSON.stringify(planInfo));
        console.log(localStorage);
      });
    });
  }, 100);
};

export { planInfo, step2Animations };
