export { }

// Example: Custom Error Classes in a File Processing Application
// The application defines custom error classes (FileNotFoundError and PermissionDeniedError) 
// to represent specific file-related errors encountered during file processing.

// Define custom error classes for file processing
class FileNotFoundError extends Error {
  constructor(fileName: string) {
    super(`File not found: ${fileName}`);
    this.name = this.constructor.name;
  }
}

// Define custom error class for permission denied
class PermissionDeniedError extends Error {
  constructor(fileName: string) {
    super(`Permission denied: ${fileName}`);
    this.name = this.constructor.name;
  }
}

// Process a file
function processFile(fileName: string): void {
  if (!fileExists(fileName)) {
    throw new FileNotFoundError(fileName);
  }

  if (!hasPermission(fileName)) {
    throw new PermissionDeniedError(fileName);
  }

  // Process the file
}

// Helper functions to check file existence and permissions

// Mock method to check if file exists
function fileExists(fileName: string): boolean {
  // Logic to check if file exists
  if (fileName === "nonexistent.txt") {
    return false;
  }
  return true;
}


// Mock method  to check file permissions
function hasPermission(fileName: string): boolean {
  // Logic to check file permissions
  if (fileName === "example.txt") {
    return true;
  }
  return false;
}

// Run with different file names to test error handling
//let fileName = "nonexistent.txt"
// let fileName = "example.txt"
let fileName = "example1.txt"
try {
  processFile(fileName);
  console.log("File processed successfully.");
} catch (error) {
  if (error instanceof FileNotFoundError) {
    console.log(error.message);
    console.log("Please provide the correct file name.")
  } else if (error instanceof PermissionDeniedError) {
    console.log(error.message);
    console.log("Please check file permissions.") 
  } else {
    console.log("An error occurred:", (error as Error).message);
  }
}
