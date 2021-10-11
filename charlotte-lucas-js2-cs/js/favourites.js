import { getExistingFavourites } from "./utils/storage.js";
import clearArticlesButton from "./components/clearButton.js";

const favourites = getExistingFavourites();

const articleContainer = document.querySelector(".article-container");

clearArticlesButton();

if(favourites.length === 0) {
    articleContainer.innerHTML = "No favourites yet";
}

favourites.forEach(favourite => {
    articleContainer.innerHTML += `<div class="article">
                                        <div class="title-container">
                                            <h2>${favourite.title}</h2>
                                            <i class="fa fa-star"></i>
                                        </div>
                                        <div class="underline"></div>
                                        <p>${favourite.summary}</p>
                                        <h3>${favourite.author}</h3>
                                    </div>`;
});