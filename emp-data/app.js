var Employee = /** @class */ (function () {
    function Employee(id, name, email, password) {
        if (Employee.employeeIds.has(id)) {
            throw new Error("Employee ID must be unique.");
        }
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        Employee.employeeIds.add(id);
    }
    Employee.prototype.displayInfo = function () {
        console.log("ID: ".concat(this.id, ", Name: ").concat(this.name, ", Email: ").concat(this.email));
    };
    Employee.employeeIds = new Set();
    return Employee;
}());
// Example Usage
var emp1 = new Employee(1, "John Doe", "john@example.com", "password123");
emp1.displayInfo();
