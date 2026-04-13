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

      books.forEach(book => {
        shelf.innerHTML += `
        <div class="book-card">
            <img src="${book.image}" alt="${book.title}" width=150>

            <h2>${book.title}</h2>

            <p><h4>Author:</h4> ${book.author}</p>
            <p><h4>Category:</h4>  ${book.genre}</p>
            <p class="${book.status === "Borrowed" ? "borrowed" : "available"}">
                ${book.status}
            </p>

            <a href="userVB.html?id=${book.id}" class="view-btn">
                View Details
            </a>
        </div>
        `;
    });
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