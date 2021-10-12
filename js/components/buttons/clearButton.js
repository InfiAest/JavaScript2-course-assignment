import renderArticles from "../renderArticles.js";
import { articleContainer } from "../../settings/articleContainer.js";

export default function clearArticlesButton() {
    const clearBtn = document.querySelector("#clear");

    clearBtn.addEventListener("click", clearArticles);

    function clearArticles() {
        confirm("Are you sure you want to clear your favourite articles?");
        localStorage.removeItem("favourites");
        renderArticles([], articleContainer);
    }
}