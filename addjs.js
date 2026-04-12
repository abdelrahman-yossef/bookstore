function saveBooks(books){
    localStorage.setItem("books",JSON.stringify(books))
}

function getBooks (){
    return JSON.parse(localStorage.getItem("books")) || [] 
}



function addBook (bID, btitle, bauthor, bgenre, bprice, bpages, bdescription, bImage){
    let books =  getBooks();
     let newbook = {
         bookID : bID, bookTitle : btitle , bookAuthor : bauthor , bookGenre : bgenre, bookPrice : bprice  , bookPages : bpages, Bookdescription : bdescription, bookImage : bImage
     }
 books.push(newbook)
 saveBooks(books);
 }
 


 function handleAdd() {
    let title = document.getElementById("btitle").value;
    let author = document.getElementById("author").value;
    let price = document.getElementById("bprice").value;
    let image = document.getElementById("image").value;
    let genre = document.getElementById("genre").value;
    let description = document.getElementById("desc").value;
    let id = document.getElementById("id").value;

    addBook(id, title, author, genre, price, pages, description, image); 
    window.location.href = "adminHP.html";
}
