// Function to borrow a book from the library
function borrowBook(bookId: number): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const availableBooks = [1, 2, 3];
      
      if (availableBooks.includes(bookId)) {
        resolve(`Book ${bookId} is successfully borrowed.`);
      } else {
        reject(`Book ${bookId} is not available in the library.`);
      }
    }, 1000); // Simulate a 1-second delay
  });
}

// Handling a fulfilled Promise
const bookIdToBorrow = 2;
borrowBook(bookIdToBorrow)
  .then((message) => {
    console.log(message); // Book 2 is successfully borrowed.
  })
  .catch((error) => {
    console.error(error); // This will not be executed in this case.
  });

// Handling a rejected Promise
const bookIdToBorrowInvalid = 4;
borrowBook(bookIdToBorrowInvalid)
  .then((message) => {
    console.log(message); // This will not be executed in this case.
  })
  .catch((error) => {
    console.error(error); // Book 4 is not available in the library.
  });
