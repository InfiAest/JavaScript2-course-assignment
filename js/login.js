import displayMessage from "./components/common/displayMessage.js";
import completeLogin from "./components/login/completeLogin.js";
import createMenu from "./components/common/createMenu.js";

const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const message = document.querySelector(".message-container");

createMenu();

form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue.length === 0 || passwordValue.length === 0) {
        return displayMessage("warning", "Invalid username and/or password", ".message-container");
    }

    completeLogin(usernameValue, passwordValue);
}