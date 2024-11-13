const mainSection = document.querySelector("main");
const book = document.getElementById("book");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const btn = document.querySelector(".btn");
const form = document.querySelector("form");
const checkBox = document.getElementById("isRead");

function Book(id, title, author, pages, isRead) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

const theGreatControversy = new Book(
  1,
  "The Great Controversy",
  "Elen G White",
  592,
  "not yet read"
);
const theDesireOfAges = new Book(
  2,
  "The Desire Of Ages",
  "Elen G White",
  456,
  "not yet read"
);
const stepsToChrist = new Book(
  3,
  "Steps to Christ",
  "Elen G White",
  287,
  "not yet read"
);

let books = [theDesireOfAges, theGreatControversy, stepsToChrist];

let isItRead = "";

checkBox.addEventListener("change", (event) => {
  if (event.target.checked) {
    isItRead = "Book Is Read";
  } else {
    isItRead = "Not Yet Read";
  }
  return isItRead;
});

form.addEventListener("submit", (event) => {
  console.log(remove);
  event.preventDefault();
  books.push(
    new Book(
      `${books.length + 1}`,
      `${book.value}`,
      `${author.value}`,
      `${pages.value}`,
      `${isItRead}`
    )
  );
  console.log(isItRead);

  booksContent = " ";
  myBooks();
});

let booksContent = "";
let identifier = 1;

function myBooks() {
  console.log(books);
  books.forEach((book) => {
    booksContent += `
    <div class="books-content">
      <div class="image">
        <img src="https://img.freepik.com/free-vector/white-brochure-with-blue-wavy-shapes_1048-2838.jpg?t=st=1731442762~exp=1731446362~hmac=b6c460b0785726babc080b209ae6a849b0e39612110020df8d36081f902d6342&w=740" alt="my imge">
      </div>
      <div class="details">
        <p class="title">${book.title}</p>
        <p class="author">${book.author}</p>
        <p class="pages">${book.pages} pages</p>
        <p class="is-read">${book.isRead}</p>
        <button id="remove"  class="btn"  "btn-primary">Remove</button>
      </div>
    </div>
      `;
  });
  mainSection.innerHTML = booksContent;
  const removeBtn = document.querySelectorAll("#remove");
  const removeButtons = Array.from(removeBtn);
  console.log(removeButtons);

  removeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      let item = removeButtons.indexOf(button);
      booksContent = books.splice(item, 1);
      myBooks();
    });
  });
}

myBooks();
