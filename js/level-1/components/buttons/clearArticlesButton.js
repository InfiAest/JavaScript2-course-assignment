import renderArticles from "../../../common/components/renderArticles.js";
import { articleContainer } from "../../../common/settings/articleContainer.js";

export default function clearArticlesButton() {
    const clearBtn = document.querySelector("#clear");

    clearBtn.addEventListener("click", clearArticles);

    function clearArticles() {
        confirm("Are you sure you want to clear your favourite articles?");
        localStorage.removeItem("favourites");
        renderArticles([], articleContainer);
    }
}