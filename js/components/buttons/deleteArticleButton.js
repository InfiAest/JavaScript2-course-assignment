import { baseUrl } from "../../settings/api.js";
import { getToken } from "../../utils/storage.js";

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
            }
            catch (error) {
                console.log(error);
            }
        }
    };
}