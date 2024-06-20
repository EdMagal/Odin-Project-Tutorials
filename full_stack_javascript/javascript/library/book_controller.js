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
  const tableRow = document.createElement("tr");

  // Appends a cell with the ID of the book
  const tableDataId = document.createElement("td");
  tableDataId.innerHTML = book["id"];
  tableRow.appendChild(tableDataId);

  // Appends a cell with the TITLE of the book
  const tableDataTitle = document.createElement("td");
  tableDataTitle.innerHTML = book["title"];
  tableRow.appendChild(tableDataTitle);

  // Appends a cell with the AUTHOR of the book
  const tableDataAuthor = document.createElement("td");
  tableDataAuthor.innerHTML = book["author"];
  tableRow.appendChild(tableDataAuthor);

  // Appends a cell with the NUMBER OF PAGES of the book
  const tableDataPages = document.createElement("td");
  tableDataPages.innerHTML = book["pages"];
  tableRow.appendChild(tableDataPages);

  // Appends a cell with a button to toggle READ / NOT READ
  const tableDataRead = document.createElement("td");
  tableRow.appendChild(tableDataRead);
  // Appends a cell with a button to toggle READ / NOT READ
  const readButton = document.createElement("button");
  readButton.innerHTML = book["read"] ? "Read" : "Not Read";
  readButton.addEventListener("click", () => {
    book.toggleRead();
    readButton.innerHTML = book["read"] ? "Read" : "Not Read";
  });
  tableDataRead.appendChild(readButton);

  // Appends a cell with a button to DELETE the book row
  const tableDataDelete = document.createElement("button");
  tableDataDelete.innerHTML = "Delete";
  tableRow.appendChild(tableDataDelete);
  tableDataDelete.addEventListener("click", () => {
    let confirmationText = `Are you sure you want to delete ${book["title"]}?`;
    if (confirm(confirmationText)) {
      book.delete();
      tableRow.remove();
    }
  });

  document.getElementById("books").appendChild(tableRow);
  return book;
}
