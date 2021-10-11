import { url } from "./settings/api.js";
import renderArticles from "./components/renderArticles.js";
import displayMessage from "./components/displayMessage.js";
import searchArticles from "./components/searchArticles.js";
import { articleContainer } from "./settings/articleContainer.js";

async function getNewsArticles() {
    try {
        const response = await fetch(url);
        const json = await response.json();

        const articles = json;

       renderArticles(articles, articleContainer);
       searchArticles(articles, articleContainer);
    }
    catch (error) {
        console.log(error);
        displayMessage("error", "Something went wrong", articleContainer);
    }
}
getNewsArticles();







