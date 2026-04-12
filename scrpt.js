function saveBooks(books){
    localStorage.setItem("books",JSON.stringify(books))
}

function getBooks (){
    return JSON.parse(localStorage.getItem("books")) || [] 
}




function displayBooks() {
    let books = getBooks(); 

    let Shelf = document.getElementById("booksShelf"); 
    Shelf.innerHTML = "";

    books.forEach(book => {
        Shelf.innerHTML += `
        <div class="book">
            <img src="${book.bookImage}" width="150">
        <h2>${book.bookName}</h2>
            <p>Price: ${book.bookPrice} L.E</p>
            <p>Author: ${book.bookAuthor}</p>
            <button onclick="editBook(${book.bookID})">Edit</button>
           <button onclick="deleteBook(${book.bookID})">Delete</button>
        </div>
        `;
    });
}
function deleteBook(id) {
    let books = getBooks();

    let confirmDelete = confirm("Are you sure?");
    if (!confirmDelete) return;

    books = books.filter(b => b.bookID != id);

    saveBooks(books);
    displayBooks();
}
function editBook(id) {
    let books = getBooks();
    let book = books.find(b => b.bookID == id);
    if (!book) return alert("Book not found");

    book.bookName = prompt("New name:", book.bookName) || book.bookName;
    book.bookAuthor = prompt("New author:", book.bookAuthor) || book.bookAuthor;
    book.bookPrice = prompt("New price:", book.bookPrice) || book.bookPrice;

    saveBooks(books);
    displayBooks();
}
document.addEventListener("DOMContentLoaded", function () {
    displayBooks();});
    


const sound = new Audio("sounds/buttonclick.mp3");
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    sound.currentTime = 0;
    sound.play();
  });
});