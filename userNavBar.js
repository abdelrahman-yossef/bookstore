function getLoggedInUser() {
    return JSON.parse(localStorage.getItem("user"));
}

function displayWelcome() {
    let user = getLoggedInUser();
    let welcomeSpan = document.getElementById("welcomeMsg");

    if (user) {
        welcomeSpan.innerText = "| Welcome, " + user.name;
    } else {
        window.location.href = "login.html";
    }
}

function getBooks() {
    return JSON.parse(localStorage.getItem("books")) || [];
}

function getBorrowedBooks() {
    let user = getLoggedInUser();
    let allBorrowed = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    return allBorrowed.filter(b => b.borrowerEmail === user.email);
}

function displayBooks() {
    let books = getBooks();
    let borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    let borrowedIDs = borrowedBooks.map(b => b.bookID);

    let shelf = document.getElementById("booksShelf");
    shelf.innerHTML = "";

    if (books.length === 0) {
        shelf.innerHTML = "<p>No books available in the library yet.</p>";
        return;
    }

    let table = "<table border='1' cellpadding='10' cellspacing='0' width='100%'>";
    table += "<tr><th>ID</th><th>Book Name</th><th>Author</th><th>Category</th><th>Status</th><th>Action</th></tr>";

    books.forEach(book => {
        let isBorrowed = borrowedIDs.includes(book.bookID);
        let status = isBorrowed ? "Not Available" : "Available";

        table += `<tr>
            <td>${book.bookID}</td>
            <td>${book.bookName}</td>
            <td>${book.bookAuthor}</td>
            <td>${book.bookCatigory}</td>
            <td>${status}</td>
            <td><a href="userViewBook1.html?id=${book.bookID}">View Details</a></td>
        </tr>`;
    });

    table += "</table>";
    shelf.innerHTML = table;
}

function logout() {
    localStorage.removeItem("user");
    window.location.href = "login.html";
}

window.onload = function () {
    displayWelcome();
    displayBooks();
};


function quickSearch(event) {
    event.preventDefault();
    let query = document.getElementById("quickSearchInput").value.trim();
    if (query === "") {
        displayBooks();
        return;
    }
    window.location.href = "userSearch.html?query=" + encodeURIComponent(query);
}