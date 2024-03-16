let userInfo = {};

const handleInputInitialValue = () => {
  setTimeout(() => {
    const storedData = localStorage.getItem("userInfo");
    const inputs = document.querySelectorAll("input");

    if (storedData) {
      userInfo = JSON.parse(storedData);

      inputs.forEach((input) => {
        if (userInfo[input.name]) {
          input.value = userInfo[input.name];
        }
      });
    }
  }, 100);
};

const handleLocaleStorage = () => {
  setTimeout(() => {
    const inputs = document.querySelectorAll("input");

    inputs.forEach((input) => {
      input.addEventListener("change", (e) => {
        userInfo = { ...userInfo, [e.target.name]: e.target.value };
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        console.log(userInfo, "changing");
      });
    });
  }, 100);
};

handleInputInitialValue();

handleLocaleStorage();

export { userInfo, handleInputInitialValue, handleLocaleStorage };
