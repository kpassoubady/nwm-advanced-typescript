// Example: Error Handling in a Web Server
import express, { Request, Response } from "express";

// use a cmd line to run this file
// ts-node ./2-ErrorHandlingWebServer.ts
// install nodemon globally to run this file
// npm install -g nodemon
// In package.json file, use serve script to run this file
// npm run serve
// Open http://localhost:3000/ in your browser

const app = express();

// define book interface
interface Book {
  id: number;
  title: string;
  author: string;
}

// define array of books
const books: Book[] = [
  { id: 1, title: "Book 1", author: "Author 1" },
  { id: 2, title: "Book 2", author: "Author 2" },
  { id: 3, title: "Book 3", author: "Author 3" },
  { id: 4, title: "Book 4", author: "Author 4" },
  { id: 5, title: "Book 5", author: "Author 5" },
  { id: 6, title: "Book 6", author: "Author 6" },
];

// define a handler for the GET /books route
app.get("/books", (req: Request, res: Response) => {
  try {
    res.status(200).json(books);
  } catch (error) {
    console.error("Error:", (error as Error).message);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/", (req: Request, res: Response) => {
  try {
    // Processing the request
    res.send('Hello World!');
    throw new Error("Internal server error");
  } catch (error) {
    console.error("Error:", (error as Error).message);
    res.status(500).send("Internal Server Error");
  }
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
    // Open http://localhost:3000/ in your browser
});

// killing running server for specific port on mac
// Go to terminal on mac
// sudo lsof -i :3000
// kill -9 <PID>

// killing running server for specific port on windows
// Go to cmd prompt on windows
// netstat -ano | findstr :3000
// taskkill /PID <PID> /F
