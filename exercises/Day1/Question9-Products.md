 You are building an e-commerce platform that sells various types of products, 
 including electronics, books, and clothing. 
  * You want to create a function that calculates the total cost of an order. 
  * However, the total cost calculation differs for each type of product.
  * For example, the cost of electronics includes sales tax, while the cost of books does not. 
 Implement a generic function calculateOrderCost that takes one type parameter: TProduct. 
  - The TProduct type parameter specifies the type of the product being ordered. 
  - The function should accept an array of TProduct objects and return a number value representing the total cost of the order. 
  - Use constraints to ensure that TProduct objects have a price property of type number, and that totalCost can be added to a number.

  Example Interfaces and the records created:

  ```typescript:
  interface Electronic {
    name: string;
    price: number;
}

interface Book {
    name: string;
    price: number;
}

interface Clothing {
    name: string;
    price: number;
    size: string;
}

const electronics: Electronic[] = [
    { name: 'Laptop', price: 1500 },
    { name: 'Phone', price: 800 },
];

const books: Book[] = [
    { name: 'Clean Code', price: 30 },
    { name: 'The Pragmatic Programmer', price: 40 },
];

const clothing: Clothing[] = [
    { name: 'T-Shirt', price: 20, size: 'M' },
    { name: 'Jeans', price: 50, size: '32/30' },
];
```

Example calling of the calculateOrderCost method:

```typescript:
const totalElectronicCost = calculateOrderCost<Electronic>(electronics);
console.log(`Total electronic cost: $${totalElectronicCost}`);

const totalBookCost = calculateOrderCost<Book>(books);
console.log(`Total book cost: $${totalBookCost}`);

const totalClothingCost = calculateOrderCost<Clothing>(clothing);
console.log(`Total clothing cost: $${totalClothingCost}`);
```

Expected output:
```
Total electronic cost: $2300
Total book cost: $70
Total clothing cost: $70
```
