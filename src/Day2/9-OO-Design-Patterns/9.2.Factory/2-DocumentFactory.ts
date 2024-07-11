export {}

// Real-life situation using Factory pattern for document creation
interface Document {
  create(): void;
}

class PDFDocument implements Document {
  create() {
      console.log("Creating a PDF document");
  }
}

class WordDocument implements Document {
  create() {
      console.log("Creating a Word document");
  }
}

class HTMLDocument implements Document {
  create() {
      console.log("Creating an HTML document");
  }
}

class DocumentFactory {
  createDocument(type: string): Document {
      switch (type) {
          case "pdf":
              return new PDFDocument();
          case "word":
              return new WordDocument();
          case "html":
              return new HTMLDocument();
          default:
              throw new Error("Invalid document type");
      }
  }
}

// Usage:
const docFactory = new DocumentFactory();
const pdfDoc = docFactory.createDocument("pdf");
pdfDoc.create(); // Output: Creating a PDF document

const wordDoc = docFactory.createDocument("word");
wordDoc.create(); // Output: Creating a Word document

const htmlDoc = docFactory.createDocument("html");
htmlDoc.create(); // Output: Creating an HTML document
