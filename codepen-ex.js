//  Part I
//  1. Get the main content container
//  2. Get first post title
//  3. Get first post content
//  4. Get all post titles
//  5. Change the value for the first title
//  6. Change the URL for the first title link
//  7. Change the background color for the body
//  8. Add a new class to the articles then add styles

//  Part II
//  1.  Select the parent element for the first post title
//  2.  Select the first post and log the siblings
//  3.  Select the #main container and log the children

// Bonus Set the entry content with the current date and time and update it every x (as parameter) seconds

// I
// 1
const main = document.getElementById('main');
console.log(main);

// 2
const posts = document.getElementsByClassName('post');
const firstPost = posts[0];
const firstPostTitle = firstPost.children[0].children[0].innerText;
console.log(firstPostTitle);

// 3
console.log(firstPost.innerHTML);

// 4
const forEachNode = (nodes, handler) => {
    for (let i = 0; i < posts.length; ++i) {
        handler(nodes[i]);
    }
};

forEachNode(posts, post => {
    console.log(post.children[0].children[0].innerText);
});

// for(let i = 0; i < posts.length; ++i)
// {
//   console.log(posts[i].children[0].children[0].innerText);
// }
// Array.prototype.forEach.call

// 5
firstPost.children[0].children[0].innerText = "Title improved";

// 6
const firstPostLink = firstPost.children[0].children[0];
firstPostLink.setAttribute('href', 'https://www.youtube.com/watch?v=ZH5d-Rwi95A');

// 7
document.body.style.backgroundColor = '#00ffff';

// 8
forEachNode(posts, post => {
    post.classList.add('aClass');
    post.style.color = "#ff7700";
});

// II
// 1

const firstPostTextNode = firstPost.children[0].children[0].childNodes[0];
console.log("Parent of first article's title: ", firstPostTextNode.parentNode);

// 2
let postIt = firstPost.nextSibling;
while (postIt !== null) {
    console.log(postIt);
    postIt = postIt.nextSibling;
}

// 3
forEachNode(main.children, child => {
    console.log(child);
});

// bonus
function toDateTime(secs) {
    const t = new Date(1970, 0, 1, 0, 0, 0,); // Epoch
    t.setSeconds(secs);
    t.setUTCHours(3);
    return t;
}

const setIntervalAtSecs = x => {
    const firstPostContent = firstPost.innerHTML;
    setInterval(() => {
        firstPost.innerHTML = "<p style='color: #000000'>" + toDateTime(Date.now() / 1000) + "</p><br>" + firstPostContent;
    }, x * 1000);
};

setIntervalAtSecs(10);