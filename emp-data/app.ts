class Employee {
    private static employeeIds = new Set<number>();

    id: number;
    name: string;
    email: string;
    password: string;

    constructor(id: number, name: string, email: string, password: string) {
        if (Employee.employeeIds.has(id)) {
            throw new Error("Employee ID must be unique.");
        }
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        Employee.employeeIds.add(id);
    }

    displayInfo() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Email: ${this.email}`);
    }
}

// Example Usage
const emp1 = new Employee(1, "John Doe", "john@example.com", "password123");
emp1.displayInfo();
