const axios = require("axios");

(function () {
  const validationSuccessful = true;
  const loginUsernameValue = document.getElementById("usernameField");
  const loginPasswordValue = document.getElementById("passwordField");
  const loginFormSubmit = document.getElementById("loginFormSubmit");

  loginFormSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("in form button click");
    if (validationSuccessful) {
      axios
        .post("https://reqres.in/api/login", {
          email: "eve.holt@reqres.in",
          password: "cityslicka",
        })
        .then((res) => {
          console.log("res", res);
        });
      location.href = "./confirmation.html";
      // fetch("https://jsonplaceholder.typicode.com/posts/1", {
      //   method: "PUT",
      //   body: JSON.stringify({
      //     id: 1,
      //     title: "foo",
      //     body: "bar",
      //     userId: 1,
      //   }),
      //   headers: {
      //     "Content-type": "application/json; charset=UTF-8",
      //   },
      // })
      //   .then((response) => response.json())
      //   .then((json) => console.log(json));
    }
  });
})();
