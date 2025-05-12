// 2. Task: Object Manipulation
// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
  {
    title: "And the mountains echoed",
    author: "Khaled Hosseini",
    year: 2017,
  },
  {
    title: "Forty rules of love",
    author: "Elif Shafak",
    year: 2018,
  },
  {
    title: "Ikigai",
    author: "Japanese Writer",
    year: 2019,
  },
];

const bookTitle = (
  bookArray: { title: string; author: string; year: number }[]
) => {
  const bookTitle = bookArray.map((book) => book.title);

  return bookTitle;
};

const result2 = bookTitle(books);

console.log(result2);
