const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const counterText = document.getElementById('counter');
const postListDiv = document.getElementById('post-list');

fetch('/query').then((response) => {
    return response.json();
}).then((obj) => {
    counterText.innerText = obj.number;
});

// Equivalent
/* fetch('/query').then((response) => {
 *     return response.text();
 * }).then((text) => {
 *     const json = JSON.parse(text);
 *     counterText.innerText = json.number;
 * }); */

minusButton.addEventListener('click', function() {
    fetch('/minus').then((response) => {
        return response.text();
    }).then((text) => {
        counterText.innerText = text;
    });
});

plusButton.addEventListener('click', function() {
    fetch('/plus').then((response) => {
        return response.text();
    }).then((text) => {
        counterText.innerText = text;
    });
});

fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
    return response.json();
}).then((posts) => {
    posts.forEach((post) => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerText = `${post.id}: ${post.title}`;
        postListDiv.appendChild(postDiv);
    });
});