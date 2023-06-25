// Initializing object book
const book = {
  title: "Hunters",
  author: "Josh Hartnett",
  year: "",
  toString() {
    return `${this.title} by ${this.author}, ${this.year}`;
  }
};

// Initializing bookstore array
const bookstore = [];

// Function that adds a new book
function addBook(title, author, year = new Date().getFullYear()) {
  bookstore.push({title, author, year});
}

addBook("Hunters", "Josh Hartnett", "1988");

// Function to remove a book
function removeBook(title) {
  let index = bookstore.findIndex((book => book.title === title));
  bookstore.splice(index, 1);
}

removeBook("Hunters");

function getBookStore() {
  return bookstore;
}

console.log(bookstore);

