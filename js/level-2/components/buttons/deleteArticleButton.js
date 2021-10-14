import { baseUrl } from "../../../common/settings/api.js";
import { getExistingFavourites, getToken, saveFavourites } from "../../../common/utils/storage.js";

export default function deleteArticleButton(id) {

    const container = document.querySelector(".delete-container");

    container.innerHTML = `<button type="button" class="formButton delete">Delete</button>`;

    const deleteButton = document.querySelector("button.delete");

    deleteButton.onclick = async function() {
        
        console.log(id);

        const doDelete = confirm("Are you sure you want to delete this article?");

        if(doDelete) {
            const url = baseUrl + "articles/" + id;

            const token = getToken();
    
            const options = {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
    
            try {
                const response = await fetch(url, options);
                const json = await response.json();
                location.href = "/";
                console.log(json);

                //remove from favourites if deleted article was in the favourites array
                //get id for the current article from the querystring
                const queryString = document.location.search;
                const params = new URLSearchParams(queryString);
                const id = params.get("id");
                //get the favourites array
                const currentFavourites = getExistingFavourites();
                //find the current article id inside the array
                const articleExists = currentFavourites.find(function(article) {
                    return article.id === id;
                });
                //if the article is in the array remove it and save the new favourites array
                if (articleExists) {
                    const newFavourites = currentFavourites.filter(article => article.id !== id);
                    saveFavourites(newFavourites);
                }
                
            }
            catch (error) {
                console.log(error);
            }
        }
    };
}

