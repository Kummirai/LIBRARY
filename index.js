const mainSetion = document.querySelector("main");
const book = document.getElementById('book');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const btn = document.querySelector('.btn');
const form = document.querySelector('form');

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

const theGreatControversy = new Book(
  "The Great Controversy",
  "Elen G White",
  592,
  "not yet read"
);
const theDesireOfAges = new Book(
  "The Desire Of Ages",
  "Elen G White",
  456,
  "not yet read"
);
const stepsToChrist = new Book(
  "Steps to Christ",
  "Elen G White",
  287,
  "not yet read"
);

let books = [theDesireOfAges, theGreatControversy, stepsToChrist];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  books.push(new Book(`${book.value}`, `${author.value}`, `${pages.value}`));
  mainSetion.innerHTML ='';
  myBooks();
})


let booksContent = "";

function myBooks() {
  books.map((book) => {
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
      </div>
    </div>
      `;
  })
  mainSetion.innerHTML = booksContent;
  console.log(booksContent);
};

myBooks();