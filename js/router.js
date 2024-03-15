const nextBtn = document.querySelector(".form-container__next-btn");
const goBackBtn = document.querySelector(".form-container__go-back-btn");
const form = document.querySelector(".form");
const navbarStepNumbers = document.querySelectorAll(".navbar__step-number ");

import { step2Animations } from "./animations.js";
import { userInfo } from "./index.js";

let stepCounter = 1;

const routes = {
  "/": "/views/step1.html",
  "/step2": "/views/step2.html",
  "/step3": "/views/step3.html",
  "/step4": "/views/step4.html",
};

const route = (e) => {
  let pathname = window.location.pathname;

  if (pathname == "/") {
    window.history.pushState({}, "", "/step2");
    stepCounter = 2;
  } else if (pathname == "/step2") {
    window.history.pushState({}, "", "/step3");
    stepCounter = 3;
  } else if (pathname == "/step3") {
    window.history.pushState({}, "", "/step4");
    stepCounter = 4;
  }

  handleLocation();
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path];
  const html = await fetch(route).then((data) => data.text());
  form.innerHTML = html;
};

const handleStepCounter = () => {
  let pathname = window.location.pathname;

  if (pathname == "/") {
    stepCounter = 1;
  } else if (pathname == "/step2") {
    stepCounter = 2;
  } else if (pathname == "/step3") {
    stepCounter = 3;
  } else if (pathname == "/step4") {
    stepCounter = 4;
  }
};

const handleActiveStep = () => {
  navbarStepNumbers.forEach((step, index) => {
    step.classList.remove("navbar__step-number--active");
    if (stepCounter == index + 1) {
      step.classList.add("navbar__step-number--active");
    }
  });
};

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  route();
  handleActiveStep();
  step2Animations();
});

goBackBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let pathname = window.location.pathname;

  if (pathname == "/step4") {
    window.history.pushState({}, "", "/step3");
    stepCounter = 3;
  } else if (pathname == "/step3") {
    window.history.pushState({}, "", "/step2");
    stepCounter = 2;
  } else if (pathname == "/step2") {
    window.history.pushState({}, "", "/");
    stepCounter = 1;
  }

  handleActiveStep();
  handleLocation();
  step2Animations();
});

window.onpopstate = function () {
  handleLocation();
  console.log(localStorage);
  setTimeout(() => {
    let inputs = document.querySelectorAll("input");

    inputs.forEach((input) => {
      input.value = localStorage.getItem(input.name);
    });
  }, 100);

  step2Animations();
  handleStepCounter();
  handleActiveStep();
};

window.route = route;

handleLocation();
handleActiveStep();
