import { getUsername } from "../../common/utils/storage.js";
import logout from "./logout.js";

export default function createNavBar() {
    const { pathname } = document.location;

    const menuContainer = document.querySelector(".menu-container");

    const username = getUsername();

    let authLink = `<a href="login.html" class="${pathname === "/login.html" ? "active" : ""}">Login</a>`;

    if (username) {
        authLink = `<li><a href="/add.html" class="${pathname === "/add.html" ? "active" : ""}">Add Article</a></li>
                    <button id="logout">Logout ${username}</button>`;
    }

    menuContainer.innerHTML = ` <li><a href="/" class="${pathname === "/" || pathname === "/index.html" ? "active" : ""}">Home</a></li>
                                <li><a href="/favourites.html" class="${pathname === "/favourites.html" ? "active" : ""}">Favourites</a></li>
                                <li>${authLink}</li>`;

    logout();
}