/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 */

// Image URLs
const CHILDREN_OF_MEN_URL = "https://m.media-amazon.com/images/M/MV5BZjUzY2ZhZDAtZDRlNS00MzEzLTliZjItMzMyYzM2OTdkZGJjXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg";
const THE_GODFATHER_URL = "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg";
const DUMB_AND_DUMBER_URL = "https://m.media-amazon.com/images/M/MV5BZDQwMjNiMTQtY2UwYy00NjhiLTk0ZWEtZWM5ZWMzNGFjNTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg";

// Genres of my favorite movies
const genres1 = ['sci-fi', 'drama', 'action']; // Children of Men
const genres2 = ['crime', 'drama']; // The Godfather
const genres3 = ['comedy']; // Dumb and Dumber

// Favorite lines
const favline1 = "Baby Diego was stabbed outside a bar in Buenos Aires after refusing to sign an autograph."; // Children of Men
const favline2 = "I believe in America. America has made my fortune."; // The Godfather
const favline3 = "We got no food, no jobs; our PETS' HEADS ARE FALLING OFF!"; // Dumb and Dumber

// Favorite scenes (URLs)
const scene1 = "https://youtu.be/YBzWTIexszQ?si=TeCz4RtQSGFBnCL3"; // Children of Men
const scene2 = "https://youtu.be/TERvoFSUGKk?si=ai7_7cUSGu-kTU8k"; // The Godfather
const scene3 = "https://youtu.be/WQBc8yxjdSs?si=oI_3JoTahHv2qnGW"; // Dumb and Dumber

class Movie {
    constructor(title, releaseYear, genres, favLine, favScene, imgURL) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.genres = genres;
        this.favLine = favLine;
        this.favScene = favScene;
        this.imgURL = imgURL;
        this.next = null;
    }
};

class LinkedList {
    constructor() {
        // Initializes this.head
        this.head = null;
    }

    append(...args) {
        if (null === this.head) {
            this.head = new Movie(...args); // Adds the first movie
        } else {
            let tmp = this.head;
            while (null !== tmp.next) {
                tmp = tmp.next;
            }
            tmp.next = new Movie(...args); // Adds another movie
        }
    }
};

// Create a LinkedList instance
const movieCollection = new LinkedList();

// Append my Movie objects to the linked list
movieCollection.append(new Movie('Children of Men', 2006, genres1, favline1, scene1, CHILDREN_OF_MEN_URL));
console.log(movieCollection.head.title);
movieCollection.append(new Movie('The Godfather', 1974, genres2, favline2, scene2, THE_GODFATHER_URL));
movieCollection.append(new Movie('Dumb and Dumber', 1994, genres3, favline3, scene3, DUMB_AND_DUMBER_URL));

// Use stack logic -> decrease traversal every time you pop?
// This function adds cards to the page to display the data in the array
function showCards(movieCollection) {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    let current = movieCollection.head;
    while (null !== current) {
        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, current.title, current.imgURL); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
        current = current.next;
    }
}

function editCardContent(card, newTitle, newImageURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

// Finish this
function sortByGenre() {
    titles.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}
