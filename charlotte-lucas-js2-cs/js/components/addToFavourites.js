import { getExistingFavourites } from "../utils/storage.js";

export function addToFavourites() {
    const favButtons = document.querySelectorAll(".article i");

        favButtons.forEach((button) => {
            button.addEventListener("click", handleClick);
        });


        function handleClick() {
            this.classList.toggle("fa");
            this.classList.toggle("far");
        
            const id = this.dataset.id;
            const title = this.dataset.title;
            const summary = this.dataset.summary;
            const author = this.dataset.author;
        
            const currentFavourites = getExistingFavourites();
            
            const articleExists = currentFavourites.find(function(article) {
                return article.id === id;
            });
        
            if(!articleExists) {
                const article = { id: id, title: title, summary: summary, author: author };
        
                currentFavourites.push(article);
            
                saveFavourites(currentFavourites);
            }
            else {
                const newFavourites = currentFavourites.filter(article => article.id !== id);
                saveFavourites(newFavourites);
            }
        };

        function saveFavourites(favourites) {
            localStorage.setItem("favourites", JSON.stringify(favourites));
        };
};