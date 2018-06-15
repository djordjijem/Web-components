function dev(type, message) {
    console[type](message);
}
function prod(url, message) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.send(JSON.stringify({ data: message }));
}
export {dev,prod};