interface Employee {
    id: number;
    name: string;
    department: string;
    salary: number;
}

const employees: Employee[] = [
    { id: 1, name: 'John Doe', department: 'HR', salary: 50000 },
    { id: 2, name: 'Jane Smith', department: 'IT', salary: 70000 },
    { id: 3, name: 'Mike Brown', department: 'Finance', salary: 60000 },
    { id: 4, name: 'Sara Lee', department: 'IT', salary: 75000 },
];

const departmentSalaries = employees.reduce((acc, emp) => {
    if (!acc[emp.department]) {
        acc[emp.department] = 0;
    }
    acc[emp.department] += emp.salary;
    return acc;
}, {} as Record<string, number>);

console.log(departmentSalaries);
