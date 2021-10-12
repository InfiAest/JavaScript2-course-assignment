import { clearStorage } from "../../utils/storage.js";

export default function logout() {
    const logoutButton = document.querySelector("#logout");

    if(logoutButton) {
        logoutButton.onclick = function() {
            const doLogout = confirm("Are you sure you want to logout?");

            if (doLogout) {
                clearStorage();
                location.href = "/";
            }
        }
    }
}