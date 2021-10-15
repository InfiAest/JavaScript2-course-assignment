import { baseUrl } from "../common/settings/api.js";
import renderArticles from "../common/components/renderArticles.js";
import displayMessage from "../common/components/displayMessage.js";
import searchArticles from "./components/search/searchArticles.js";
import { articleContainer } from "../common/settings/articleContainer.js";
import createNavBar from "../common/components/createNavBar.js";

createNavBar();

const url = baseUrl + "articles";

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







