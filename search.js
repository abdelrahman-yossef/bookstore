window.onload = function () {
  let storedBooks = JSON.parse(localStorage.getItem("books")) || [];

  let books = storedBooks.map(book => {
      return {
          id: book.bookID,
          name: book.bookName,
          author: book.bookAuthor,
          category: book.bookCatigory,
          status: "Available",
          link: "#"
      };
  });

  const form = document.querySelector("form");
  const table = document.getElementById("booksTable");

  function displayResults(results) {
      let html = `
          <tr>
              <th>ID</th>
              <th>Book Name</th>
              <th>Author</th>
              <th>Category</th>
              <th>Status</th>
              <th>Link</th>
          </tr>
      `;

      if (results.length === 0) {
          html += `<tr><td colspan="6"><center>No results found</center></td></tr>`;
      } else {
          results.forEach(book => {
              html += `
                  <tr>
                      <td>${book.id}</td>
                      <td>${book.name}</td>
                      <td>${book.author}</td>
                      <td>${book.category}</td>
                      <td>${book.status}</td>
                      <td><a href="${book.link}"><font color="blue">View</font></a></td>
                  </tr>
              `;
          });
      }

      table.innerHTML = html;
  }

  displayResults(books);

  form.addEventListener("submit", function (e) {
      e.preventDefault();

      const query = form.querySelector("input").value.toLowerCase().trim();
      const type = form.querySelector("select").value;

      const filtered = books.filter(book => {
          if (type === "title") return book.name.toLowerCase().includes(query);
          if (type === "author") return book.author.toLowerCase().includes(query);
          if (type === "category") return book.category.toLowerCase().includes(query);
          return false;
      });
      
      displayResults(filtered);
  });
}