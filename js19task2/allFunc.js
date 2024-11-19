export function getFromLocalstore(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function setToLocalstorage(key,data) {
    localStorage.setItem(key,JSON.stringify(data));
}