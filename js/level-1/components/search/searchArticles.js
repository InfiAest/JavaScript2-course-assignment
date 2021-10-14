import renderArticles from "../../../common/components/renderArticles.js";

export default function searchArticles(articles, targetElement) {

    const search = document.querySelector(".search");

    search.onkeyup = function() {
        const searchValue = event.target.value.trim().toLowerCase();

        const filteredArticles = articles.filter(function(article) {
            if (article.title.toLowerCase().startsWith(searchValue)) {
                return true;
            }
        });

        renderArticles(filteredArticles, targetElement);
    };
};