import displayMessage from "../common/components/displayMessage.js";
import createMenu from "../common/components/createMenu.js";
import { getToken } from "../common/utils/storage.js";
import { baseUrl } from "../common/settings/api.js";

const token = getToken();

if(!token) {
    location.href = "/";
}

createMenu();

const form = document.querySelector("form");
const title = document.querySelector("#title");
const summary = document.querySelector("#summary");
const author = document.querySelector("#author");
const messageContainer = document.querySelector(".message-container");

form.addEventListener("submit", submitNewArticle);

function submitNewArticle(event) {
    event.preventDefault();

    messageContainer.innerHTML = "";

    const titleValue = title.value.trim();
    const summaryValue = summary.value.trim();
    const authorValue = author.value.trim();

    if (titleValue.length === 0 || summaryValue.length === 0 || authorValue.length === 0) {
        return displayMessage("warning", "Supply proper values", ".message-container");
    }

    addArticle(titleValue, summaryValue, authorValue);

}

async function addArticle(title, summary, author) {
    const url = baseUrl + "articles";

    const data = JSON.stringify({ title: title, summary: summary, author: author });

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        if(json.created_at) {
            displayMessage("success", "Article created", ".message-container");
            form.reset();
        }
        if(json.error) {
            displayMessage("error", json.message, ".message-container");
        }

        console.log(json);

    }
    catch(error) {
        console.log(error);
    }
}