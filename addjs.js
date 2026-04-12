function saveBooks(books) {
    localStorage.setItem("books", JSON.stringify(books));
}

function getBooks() {
    return JSON.parse(localStorage.getItem("books")) || [];
}

function addBook(id, title, author, price, image, genre, description) {
    let books = getBooks();
    let newBook = {
        id: parseInt(id),
        title: title,
        author: author,
        genre: genre,
        borrowDate: "",
        returnDate: "",
        status: "Available",
        image: image,
        pages: 0,
        price: parseFloat(price),
        description: description
    };
    books.push(newBook);
    saveBooks(books);
}

function handleAdd() {
    let id          = document.getElementById("id").value.trim();
    let name        = document.getElementById("bname").value.trim();
    let author      = document.getElementById("author").value.trim();
    let price       = document.getElementById("bprice").value.trim();
    let image       = document.getElementById("image").value.trim();
    let genre       = document.getElementById("catigory").value;
    let description = document.getElementById("desc").value.trim();

    if (!id || !name || !author || !price) {
        alert("Please fill in all required fields.");
        return;
    }

    let books = getBooks();
    if (books.some(b => b.id === parseInt(id))) {
        alert("A book with this ID already exists.");
        return;
    }

    document.getElementById("s").play();
    addBook(id, name, author, price, image, genre, description);
    alert("Book added successfully!");
    window.location.href = "adminHP.html";
}