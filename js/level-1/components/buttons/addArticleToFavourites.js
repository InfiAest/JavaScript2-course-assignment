import { getExistingFavouriteArticles, saveToFavouriteArticles } from "../../../common/utils/storage.js";

export function addArticleToFavourites() {
    const favButtons = document.querySelectorAll(".article i");

        favButtons.forEach((button) => {
            button.addEventListener("click", toggleFavourite);
        });

        function toggleFavourite() {
            this.classList.toggle("fa");
            this.classList.toggle("far");
        
            const id = this.dataset.id;
            const title = this.dataset.title;
            const summary = this.dataset.summary;
            const author = this.dataset.author;
        
            const currentFavourites = getExistingFavouriteArticles();
            
            const articleExists = currentFavourites.find(function(article) {
                return article.id === id;
            });
        
            if(!articleExists) {
                const article = { id: id, title: title, summary: summary, author: author };
                currentFavourites.push(article);
                saveToFavouriteArticles(currentFavourites);
            }
            else {
                const newFavourites = currentFavourites.filter(article => article.id !== id);
                saveToFavouriteArticles(newFavourites);
            }
        };
};