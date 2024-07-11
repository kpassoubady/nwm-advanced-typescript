export { };

/*
Real-life situation: 
The FileManager class is responsible for file-related operations like reading, writing, and parsing files. 
It follows the Single Responsibility Principle by encapsulating all file operations into a single class
*/

// Example: Single Responsibility Principle (SRP) in a real-life scenario
class FileManager {
  readFile(filePath: string): string {
    // Logic to read data from the file
    return '/* File content */';
  }

  writeFile(filePath: string, data: string): void {
    // Logic to write data to the file
  }

  parseFileContent(content: string): object {
    // Logic to parse file content into structured data
    return Object('/* Parsed data */');
  }
}
