let userInfo = {};

window.addEventListener("load", () => {
  const inputs = document.querySelectorAll("input");

  inputs.forEach((input) => {
    input.addEventListener("change", (e) => {
      userInfo = { ...userInfo, [e.target.name]: e.target.value };
      input.value = "asdashdgsajkg";
    });
  });
});