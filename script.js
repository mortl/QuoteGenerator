/*
// Get Quotes From API
async function getQuotes() {
  ...
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
  try {


*/

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = [];

//Show loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

//Hide loading

function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

//Show new quote
function newQuote() {

    loading();
  //pick a random quote from apiQuote array

  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  //Check if author field is null, replace with Unknown

  if (!quote.author) {
    author.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }

  //Check quote length to determine styling

//   if (quote.text.length > 120) {
//     quoteText.classList.add("long-quote");
//   } else {
//     quoteText.classList.remove("long-quote");
//   }
 //Set the quote and hide loader
 
 quoteText.textContent = quote.text;
 complete();
}
//Show new quote
function newLocalQuote() {
  //pick a random quote from apiQuote array

  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

  console.log(quote);
}

// Get Quotes from Api
async function getQuotes() {
  loading();

  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";

  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();

    newQuote();
  } catch (error) {
    //Handle the error
  }
}

//Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent} `;

  window.open(twitterUrl, "_blank");
}

//Event listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

//newLocalQuote();
getQuotes();
