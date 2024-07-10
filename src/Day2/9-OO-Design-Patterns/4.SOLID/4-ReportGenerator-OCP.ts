export {};

/* 
Real-life situation: 
The ReportGenerator interface and its implementations (PdfReportGenerator and HtmlReportGenerator)
are open for extension by allowing new report formats to be added without modifying the existing code 
*/

// Example: Open/Closed Principle (OCP) in a real-life scenario
interface ReportGenerator {
  generateReport(data: any): string;
}

class PdfReportGenerator implements ReportGenerator {
  generateReport(data: any): string {
      // Logic to generate PDF report
      return "/* PDF report content */";
  }
}

class HtmlReportGenerator implements ReportGenerator {
  generateReport(data: any): string {
      // Logic to generate HTML report
      return "/* HTML report content */";
  }
}
