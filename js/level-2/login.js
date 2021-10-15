import displayMessage from "../common/components/displayMessage.js";
import completeLogin from "./components/login/completeLogin.js";
import createNavBar from "../common/components/createNavBar.js";

const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const message = document.querySelector(".message-container");

createNavBar();

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