import { getExistingFavourites } from "../utils/storage.js";
import displayMessage from "./displayMessage.js";
import { EMPTY_RESULTS } from "../settings/messages.js";
import { addToFavourites } from "./addToFavourites.js";


export default function renderArticles(articlesToRender, targetElement) {

    const element = document.querySelector(targetElement);
    element.innerHTML = "";

    if (articlesToRender.length === 0) {
        displayMessage("", EMPTY_RESULTS, targetElement);
    };

    const favourites = getExistingFavourites();

    articlesToRender.forEach(function(article) {
        let cssClass = "far";

            const doesObjectExist = favourites.find(function(favourite) {
                return parseInt(favourite.id) === article.id;
            });

            if(doesObjectExist) {
                cssClass = "fa";
            }

            element.innerHTML += `<div class="article">
                                                <div class="title-container">
                                                    <h2>${article.title}</h2>
                                                    <i class="${cssClass} fa-star" data-id="${article.id}" data-title="${article.title}" data-summary="${article.summary}" data-author="${article.author}"></i>
                                                </div>
                                                <div class="underline"></div>
                                                <p>${article.summary}</p>
                                                <h3>${article.author}</h3>
                                            </div>`;
    });

    addToFavourites();

};