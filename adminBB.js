const defaultBooks = [
    {
        id: 0,
        title: "The Metamorphosis",
        author: "Franz Kafka",
        genre: "Philosophical Novel",
        borrowDate: "1 May",
        returnDate: "15 May",
        status: "Borrowed",
        image: "images/KafkaCover.jpg",
        pages: 70,
        price: 50,
        description: "A story about a man who wakes up transformed into a giant insect."
    },
    {
        id: 1,
        title: "The Origin of Species",
        author: "Charles Darwin",
        genre: "Biology",
        borrowDate: "3 May",
        returnDate: "17 May",
        status: "Available",
        image: "images/TheOriginOfSCover.jpg",
        pages: 465,
        price: 200,
        description: "Darwin's groundbreaking work on evolution by natural selection."
    }
];

function loadBooks() {
    const stored = JSON.parse(localStorage.getItem("books"));
    if (!stored || stored.some(b => b.pages === undefined || b.image === undefined)) {
        localStorage.setItem("books", JSON.stringify(defaultBooks));
        return JSON.parse(JSON.stringify(defaultBooks));
    }
    return stored;
}

let books = loadBooks();

function renderBooks() {
    const container = document.getElementById("booksContainer");
    container.innerHTML = "";

    books.forEach((book, index) => {
        container.innerHTML += `
<div class="book-card">
    <img src="${book.image}" width="150">
    
    <h2>${book.title}</h2>

    <p>Price: ${book.price} L.E</p>
    <p>Author: ${book.author}</p>
  <p><h4>Genre:</h4> ${book.genre}</p>
    <p><h4>Borrow Date:</h4> ${book.borrowDate}</p>
    <p><h4>Return Date:</h4> ${book.returnDate}</p>
  <p><h4>Status:</h4> ${book.status}</p>
  <button onclick="setStatus(${index})">Set Status</button>
   <button class="danger" onclick="removeBook(${index})">Remove</button>
</div>
`;
    });
}

function setStatus(index) {
    books[index].status = books[index].status === "Borrowed" ? "Available" : "Borrowed";
    localStorage.setItem("books", JSON.stringify(books));
    renderBooks();
}

function removeBook(index) {
    const ok = confirm("Delete this record?");
    if (ok) {
        books.splice(index, 1);
        localStorage.setItem("books", JSON.stringify(books));
        renderBooks();
    }
}

renderBooks();