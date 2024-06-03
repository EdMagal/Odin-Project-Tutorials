const Book = (function () {
  let id = 1;

  return function Book(author, title, pages, read) {
    this.id = id++;
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read || false;
  };
})();

Book.prototype.index = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${
    this.read ? "read" : "not read"
  }`;
};

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};
