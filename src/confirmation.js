(function () {
  console.log("in confirmation page");

  const confirmInputs = document.querySelectorAll(".confirmInput");
  confirmInputs.forEach(function (element) {
    element.addEventListener("keypress", function (event) {
      validateNumber(event);
    });
  });

  function validateNumber(event) {
    console.log("in vn");
    const keyCode = event.keyCode;
    if (keyCode < 48 || keyCode > 57) {
      event.preventDefault();
    }
  }
})();
