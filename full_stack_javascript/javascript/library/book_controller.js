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

  return book;
});

function create(book) {
  const tableRow = document.createElement("tr");

  const tableDataId = document.createElement("td");
  tableDataId.innerHTML = book["id"];
  tableRow.appendChild(tableDataId);

  const tableDataTitle = document.createElement("td");
  tableDataTitle.innerHTML = book["title"];
  tableRow.appendChild(tableDataTitle);

  const tableDataAuthor = document.createElement("td");
  tableDataAuthor.innerHTML = book["author"];
  tableRow.appendChild(tableDataAuthor);

  const tableDataPages = document.createElement("td");
  tableDataPages.innerHTML = book["pages"];
  tableRow.appendChild(tableDataPages);

  const tableDataRead = document.createElement("button");
  tableDataRead.innerHTML = book["read"] ? "Read" : "Not Read";
  tableDataRead.addEventListener("click", () => {
    book.toggleRead();
    tableDataRead.innerHTML = book["read"] ? "Read" : "Not Read";
  });
  tableRow.appendChild(tableDataRead);

  document.getElementById("books").appendChild(tableRow);
  return book;
}

/*
function find(id) {
    const book = JSON.parse(localStorage.getItem(id));
    return book;
}

function update(book) {
    localStorage.setItem(book.id, JSON.stringify(book));
}

function remove(id) {
    localStorage.removeItem(id);
}

function clear() {
    localStorage.clear();
}

**/
