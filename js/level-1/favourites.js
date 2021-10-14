import { getExistingFavourites } from "../common/utils/storage.js";
import clearArticlesButton from "./components/buttons/clearButton.js";
import createMenu from "../common/components/createMenu.js";
import displayMessage from "../common/components/displayMessage.js";
import { EMPTY_RESULTS } from "../common/settings/messages.js";

createMenu();

const favourites = getExistingFavourites();

const articleContainer = document.querySelector(".article-container");

clearArticlesButton();

if(favourites.length === 0) {
    displayMessage("", EMPTY_RESULTS, ".article-container");
}

favourites.forEach(favourite => {
    articleContainer.innerHTML += `<div class="article">
                                        <div class="article-link">
                                            <h2>${favourite.title}</h2>
                                            <div class="underline"></div>
                                            <p>${favourite.summary}</p>
                                            <h3>${favourite.author}</h3>
                                        </div>
                                        <i class="fa fa-star"></i>
                                    </div>`;
});