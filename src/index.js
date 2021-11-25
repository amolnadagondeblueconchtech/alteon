const axios = require("axios");

(function () {
  const validationSuccessful = true;
  const loginUsernameValue = document.getElementById("usernameField").value;
  const loginPasswordValue = document.getElementById("passwordField").value;
  const loginFormSubmit = document.getElementById("loginFormSubmit");
  const alertError = document.getElementById("alertError");
  const alertSuccess = document.getElementById("alertSuccess");

  const loginInputs = document.querySelectorAll(".login-form-field");
  loginInputs.forEach(function (inputs) {
    inputs.addEventListener("focus", function () {
      if (!alertError.classList.contains("hide")) {
        alertError.classList.add("hide");
      }
    });
  });

  const appState = {
    verificationId: null,
  };
  const loginApiUrl = "http://localhost:8080/api/login";
  const postData = {
    Email: loginUsernameValue,
    Password: loginPasswordValue,
  };
  const headers = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  async function makeApiCall(apiUrl, apiMethod = "GET", body, headers) {
    const response = await axios({
      method: apiMethod,
      url: apiUrl,
      data: body,
      headers: headers,
    });
    return response.data;
  }

  loginFormSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    if (validationSuccessful) {
      makeApiCall(loginApiUrl, "POST", postData, headers)
        .then((response) => {
          console.log("repsonse in btn click", response);
          if (response.error) {
            alertError.textContent = "Incorrect mail or password";
            alertError.classList.remove("hide");
          } else {
            alertSuccess.textContent = "Login successful";
            alertSuccess.classList.remove("hide");
            setTimeout(() => {
              location.href = "./confirmation.html";
            }, 1500);
          }
        })
        .catch((error) => {
          console.log("AXIOS ERROR:", error);
        });
    }
  });
})();
