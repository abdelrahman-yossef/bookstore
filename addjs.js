function saveBooks(books){
    localStorage.setItem("books",JSON.stringify(books))
}

function getBooks (){
    return JSON.parse(localStorage.getItem("books")) || [] 
}



function addBook (bname , bauthor , bprice , bImage , bcatigory , bID , bdescription){
    let books =  getBooks();
     let newbook = {
         bookName : bname , bookAuthor : bauthor , bookPrice : bprice  ,bookImage : bImage , bookCatigory : bcatigory , bookID :bID , Bookdescription : bdescription 
     }
 books.push(newbook)
 saveBooks(books);
 }
 


 function handleAdd() {
    let name = document.getElementById("bname").value;
    let author = document.getElementById("author").value;
    let price = document.getElementById("bprice").value;
    let image = document.getElementById("image").value;
    let catigory = document.getElementById("catigory").value;
    let description = document.getElementById("desc").value;
    let id = document.getElementById("id").value;

    addBook(name, author, price, image , catigory , id , description); 
    window.location.href = "adminHP.html";
}
