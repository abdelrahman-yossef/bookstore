function saveBooks(books) {
    localStorage.setItem("books", JSON.stringify(books));
}

function getBooks() {
    return JSON.parse(localStorage.getItem("books")) || [];
}

function displayBooks() {
    let books = getBooks();
    let Shelf = document.getElementById("booksShelf");
    Shelf.innerHTML = "";

    books.forEach(book => {
        Shelf.innerHTML += `
        <div class="book">
            <img src="${book.image}" width="150">
            <h2>${book.title}</h2>
            <p>Price: ${book.price} L.E</p>
            <p>Author: ${book.author}</p>
            <button onclick="editBook(${book.id})">Edit</button>
            <button onclick="deleteBook(${book.id})">Delete</button>
        </div>
        `;
    });
}

function deleteBook(id) {
    let books = getBooks();
    let confirmDelete = confirm("Are you sure?");
    if (!confirmDelete) return;
    books = books.filter(b => b.id != id);
    saveBooks(books);
    displayBooks();
}

function editBook(id) {
    let books = getBooks();
    let book = books.find(b => b.id == id);
    if (!book) return alert("Book not found");

    book.title  = prompt("New name:", book.title)   || book.title;
    book.author = prompt("New author:", book.author) || book.author;
    book.price  = prompt("New price:", book.price)   || book.price;

    saveBooks(books);
    displayBooks();
}

document.addEventListener("DOMContentLoaded", function () {
    displayBooks();
});

const sound = new Audio("sounds/buttonclick.mp3");
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        sound.currentTime = 0;
        sound.play();
    });
});