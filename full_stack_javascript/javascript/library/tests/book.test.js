let Book = require("../book.js");

let books = {
  author: "John",
  title: "Book1",
  pages: 100,
  read: true,
};

test("Book author is John", () => {
  expect(new Book(books).author).toEqual("John");
});
