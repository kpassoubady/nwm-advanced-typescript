export {};
/*
The Interface Segregation Principle states that a client should not be forced to depend on methods it does not use
*/

/*
The AllInOnePrinterScanner class implements both Printer and Scanner interfaces. 
However, if a client only needs printing functionality, forcing it to depend on scanning methods violates ISP
*/

// Example: Interface Segregation Principle (ISP)
interface Printer {
  print(): void;
}

interface Scanner {
  scan(): void;
}

interface FaxMachine {
  fax(): void;
}

class AllInOnePrinterScanner implements Printer, Scanner, FaxMachine {
  print(): void {
      // Logic to print document
  }

  scan(): void {
      // Logic to scan document
  }

  fax(): void {
      // Logic to fax document
  }
}
