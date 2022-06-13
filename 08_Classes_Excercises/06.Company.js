class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || name == null 
            || !salary || salary == null || salary < 0
            || !position || position == null
            || !department || department == null  ) {
                throw new Error('Invalid input!');
            }
        
        if (!this.departments[department]) {
            this.departments[department] = [];
        } 

        this.departments[department].push([name, salary, position]);
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestAverageSalary = 0;
        let bestDeptName = '';

        for (let [dept, employees] of Object.entries(this.departments)) {
            let averageSalary = employees.reduce((sum, e) => sum + e[1], 0) / employees.length;
            if (averageSalary > bestAverageSalary) {
                bestAverageSalary = averageSalary;
                bestDeptName = dept;
            }
        }

        let result = `Best Department is: ${bestDeptName}\nAverage salary: ${bestAverageSalary.toFixed(2)}`;

        this.departments[bestDeptName].sort((a, b) => a[0].localeCompare(b[0]));
        this.departments[bestDeptName].sort((a, b) => b[1] - a[1]);

        for (let employeInfo of this.departments[bestDeptName]) {
            result += `\n${employeInfo[0]} ${employeInfo[1]} ${employeInfo[2]}`;
        }

        return result;
    }
}

let c = new Company();
console.log(c.addEmployee("Stanimir", 2000, "engineer", "Construction"));
console.log(c.addEmployee("Pesho", 1500, "electrical engineer", "Construction"));
console.log(c.addEmployee("Slavi", 500, "dyer", "Construction"));
console.log(c.addEmployee("Stan", 2000, "architect", "Construction"));
console.log(c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing"));
console.log(c.addEmployee("Pesho", 1000, "graphical designer", "Marketing"));
console.log(c.addEmployee("Gosho", 1350, "HR", "Human resources"));
console.log(c.bestDepartment());
// console.log(c.departments)
