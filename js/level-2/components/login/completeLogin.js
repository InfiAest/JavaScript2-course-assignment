import { saveToken, saveUser } from "../../../common/utils/storage.js";
import { baseUrl } from "../../../common/settings/api.js";
import displayMessage from "../../../common/components/displayMessage.js";

export default async function completeLogin(username, password) {
    const url = baseUrl + "auth/local";

    const data = JSON.stringify({ identifier: username, password: password });

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        console.log(json);

        if(json.user) {
            displayMessage("success", "Logging in...", ".message-container");
            saveToken(json.jwt);
            saveUser(json.user);
            location.href = "/index.html";
        }
        if (json.error) {
            displayMessage("error", "Invalid login details", ".message-container");
        }
    }
    catch(error) {
        console.log(error);
    }
}