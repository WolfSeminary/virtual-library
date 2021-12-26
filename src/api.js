
export const callGet = (url) => {
    return fetch(url).then(response => response.json())
}