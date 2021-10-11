export function getExistingFavourites() {
    const favourites = localStorage.getItem("favourites");

    if(!favourites) {
        return [];
    }
    else {
        return JSON.parse(favourites);
    }
};