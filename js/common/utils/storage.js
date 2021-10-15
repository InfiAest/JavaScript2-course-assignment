const tokenKey = "token";
const userKey = "user";
export const favouritesKey = "favourites";

export function getExistingFavouriteArticles() {
    const favourites = localStorage.getItem(favouritesKey);

    if(!favourites) {
        return [];
    }
    else {
        return JSON.parse(favourites);
    }
};

export function saveToken(token) {
    saveToStorage(tokenKey, token);
}

export function getToken() {
    return getFromStorage(tokenKey);
}

export function saveUser(user) {
    saveToStorage(userKey, user);
}

export function getUsername() {
    const user = getFromStorage(userKey);

    if (user) {
        return user.username;
    }

    return null;
}

export function logoutUser() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key) {
    const value = localStorage.getItem(key);

    if (!value) {
        return null;
    }

    return JSON.parse(value);
}

export function saveToFavouriteArticles(favourites) {
    localStorage.setItem(favouritesKey, JSON.stringify(favourites));
};