export { };

interface Employee {
    name: string;
    age: number;
    salary: number;
}

class Company<T extends Employee> {
    private employees: T[] = [];

    addEmployee(employee: T) {
        this.employees.push(employee);
    }
    getEmployeeNames(): string[] {
        return this.employees.map((employee) => employee.name);
    }

    /*
    The getTotalSalary method calculates the total salary of all employees. 
    It does this using the reduce method on the employees array. 
    The reduce method is a built-in JavaScript array method that reduces an array to a single value. 
    In this case, it's being used to sum up the salaries of all employees.
    The reduce method takes a callback function as its first argument. 
    This callback function is called for each element in the array. 
    The callback function takes two arguments: the accumulator (in this case, total), which accumulates the return values, and the current value (in this case, employee).
    For each employee in the employees array, the callback function adds the employee's salary to the total. 
    The second argument to reduce is the initial value of the accumulator, which is set to 0 in this case. 
    This means that the total starts at 0 and each employee's salary is added to it.
    */

    getTotalSalary(): number {
        return this.employees.reduce((total, employee) => total + employee.salary, 0);
    }
}

let company = new Company<Employee>();
company.addEmployee({ name: "Kangs", age: 25, salary: 50000 });
company.addEmployee({ name: "Kavya", age: 30, salary: 60000 });
company.addEmployee({ name: "Dainel", age: 22, salary: 40000 });

console.log(company.getEmployeeNames()); // Output:[ 'Kangs', 'Kavya', 'Dainel' ]
console.log(company.getTotalSalary()); // Output: 150000
