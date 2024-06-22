import("./book_model.js");

const library = {};
const submitBook = document.getElementById("add-book-form");

submitBook.addEventListener("submit", (ev) => {
  ev.preventDefault();

  const formData = new FormData(ev.target);

  const title = formData.get("title");
  const author = formData.get("author");
  const pages = formData.get("pages");
  const read = formData.get("read");

  const book = new Book(author, title, pages, read);

  create(book);

  library[book["id"]] = { book };
  console.log(library);

  return book;
});

// Handle the creation of the HTML elements
function create(book) {
  // create a new table row to insert the book's info
  const tableBody = document.getElementById("books");
  const tableRow = document.createElement("tr");

  // Create the table data and buttons
  const tableDataId = document.createElement("td");
  const tableDataTitle = document.createElement("td");
  const tableDataAuthor = document.createElement("td");
  const tableDataPages = document.createElement("td");
  const tableDataRead = document.createElement("td");
  const tableDataDelete = document.createElement("td");
  const readButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  // Fill the text inside each table data
  tableDataId.innerHTML = book["id"];
  tableDataTitle.innerHTML = book["title"];
  tableDataAuthor.innerHTML = book["author"];
  tableDataPages.innerHTML = book["pages"];
  readButton.innerHTML = book["read"] ? "Read" : "Not Read";
  deleteButton.innerHTML = "Delete";

  // Appends the table data cell to the table row
  tableRow.appendChild(tableDataId);
  tableRow.appendChild(tableDataTitle);
  tableRow.appendChild(tableDataAuthor);
  tableRow.appendChild(tableDataPages);
  tableRow.appendChild(tableDataRead);
  tableRow.appendChild(tableDataDelete);
  tableDataRead.appendChild(readButton);
  tableDataDelete.appendChild(deleteButton);

  // Adds the toggle functionality to the READ/NOT READ button
  readButton.addEventListener("click", () => {
    book.toggleRead();
    readButton.innerHTML = book["read"] ? "Read" : "Not Read";
  });

  // Adds the delete functionality to the DELETE button
  tableDataDelete.addEventListener("click", () => {
    let confirmationText = `Are you sure you want to delete ${book["title"]}?`;
    if (confirm(confirmationText)) {
      book.delete();
      tableRow.remove();
    }
  });

  tableBody.appendChild(tableRow);

  return book;
}
