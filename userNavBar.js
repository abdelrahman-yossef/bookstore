function getLoggedInUser() {
    return JSON.parse(localStorage.getItem("user"));
}

function displayWelcome() {
    let user = getLoggedInUser();
    let welcomeSpan = document.getElementById("welcomeMsg");
    if (user) {
        welcomeSpan.innerText = "Welcome, " + user.name;
    } else {
        window.location.href = "login.html";
    }
}

function getBooks() {
    return JSON.parse(localStorage.getItem("books")) || [];
}

function displayBooks() {
    let books = getBooks();
    let shelf = document.getElementById("booksShelf");
    shelf.innerHTML = "";

    if (books.length === 0) {
        shelf.innerHTML = "<p>No books available in the library yet.</p>";
        return;
    }

    let table = "<table border='1' cellpadding='10' cellspacing='0' width='100%'>";
    table += "<tr><th>ID</th><th>Book Name</th><th>Author</th><th>Category</th><th>Status</th><th>Action</th></tr>";

    books.forEach(book => {
        table += `<tr>
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.genre}</td>
            <td>${book.status}</td>
            <td><a href="userVB.html?id=${book.id}">View Details</a></td>
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