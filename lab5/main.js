class Person {
    constructor(fullName, money, sleepMode, healthRate) {
        this.fullName = fullName;
        this.money = money;
        this.sleepMode = sleepMode;
        this.healthRate = healthRate;
    }

    sleep = (hours) => {
        if (hours === 7) {
            this.sleepMode = "Happy";
        } else if (hours < 7) {
            this.sleepMode = "Tired";
        } else if (hours > 7) {
            this.sleepMode = "Lazy";
        }
        return this.sleepMode;
    }

    eat = (meals) => {
        if (meals === 3) {
            this.healthRate = 100;
        } else if (meals === 2) {
            this.healthRate = 75;
        } else if (meals === 1) {
            this.healthRate = 50;
        }
        return this.healthRate;
    }

    buy = (items) => {
        this.money = this.money - (10 * items);
        return this.money;
    }
}

class Employee extends Person {

    static count = 0;


    constructor(fullName, money, sleepMode, healthRate, email, workMood, salary, isManger) {
        super(fullName, money, sleepMode, healthRate);
        this.email = email;
        this.workMood = workMood;
        this.salary = salary;
        this.isManger = isManger;
        this.id = ++Employee.count;
    }

    work(hours) {
        if (hours === 8) {
            this.workMood = "Happy";
        } else if (hours > 8) {
            this.workMood = "Tired";
        } else if (hours < 8) {
            this.workMood = "Lazy";
        }
        return this.workMood;
    }
}

class Office {
    constructor(name, employees) {
        this.name = name;
        this.employees = employees;
    }

    getAllEmployees() {
        return this.employees;
    }

    getEmployee(id) {
        return this.employees.find((emp) => emp.id === id);
    }

    hire(emp) {
        return this.employees.push(emp);
    }

    fire(id) {
        let index = this.employees.findIndex((emp) => emp.id === id);
        Employee.id--;
        return this.employees.splice(index,1);
    }
}

// let employees = new Array(
//     new Employee( "Marwan Mohamed", 1000, "Happy", 100, "email@mail.com", "happy", 1000, false),
//     new Employee("abdo Mohamed", 1000, "Happy", 100, "email@mail.com", "happy", 1000, false),
//     new Employee("Mohamed", 1000, "Happy", 100, "email@mail.com", "happy", 1000, false),
//     new Employee("Abbas", 1000, "Happy", 100, "email@mail.com", "happy", 1000, true),
//     )

// let  offices = [new Office("New-York", employees)];
// console.log(off.getAllEmployees());
// console.log(off.getEmployee(2));
// off.fire(3)
// off.hire(new Employee(3, "Mohamed", 1000, "Happy", 100, "email@mail.com", "happy", 1000, false));

// let employees = [];
// let offices = [];
while (true) {
    let choice = prompt(`
        1- Add Employee
        2- Add Office
        3- Show All Employee
        4- Show certain Employee with id
        5- Hire Employee
        6- Fire Employee
        7- Quit
    `);

    if (choice == 1) {
        let rank = prompt("Enter mngr or nrml:");
        let empname = prompt("Enter name: "),
            money = prompt("Enter money: "),
            sleepMode = prompt("Enter sleepMode: "),
            healthRate = prompt("Enter healthRate: "),
            email = prompt("Enter email: "),
            workMood = prompt("Enter workMood: "),
            salary = prompt("Enter salary: ");
        rank = (rank === "mngr" ? true : false);
        employees.push(new Employee(empname, money, sleepMode, healthRate, email, workMood, salary,rank));
    } else if (choice == 2) {
        let officeName = prompt("Enter Office name");
        offices.push(new Office(officeName, employees));
    } else if (choice == 3) {
        let officeName = prompt("Enter Office name"),
            office = offices.find((off) => off.name === officeName);
        office.getAllEmployees().forEach(e => {
            if (e.isManger) {
                alert(`
                Id: ${e.id} 
                Name: ${e.fullName}, 
                Email: ${e.email}, 
                WorkMood: ${e.workMood}, 
                Health-Rate: ${e.healthRate} 
            `);
            } else {
                alert(`
                Id: ${e.id} 
                Name: ${e.fullName}, 
                Email: ${e.email}, 
                salary: ${e.salary}, 
                WorkMood: ${e.workMood}, 
                Health-Rate: ${e.healthRate} 
            `);
            }
        });
    } else if (choice == 4) {
        let officeName = prompt("Enter Office name"),
            office = offices.find((off) => off.name === officeName);

        if (!office) {
            alert("office doesn't exist");
            continue;
        }
        let empId = prompt("Enter Id: ");
        let e = office.getEmployee(+empId);

        if (!e) {
            alert("Invalid Id");
            continue;
        }

        alert(`
                Id: ${e.id} 
                Name: ${e.fullName}, 
                Email: ${e.email}, 
                salary: ${e.salary}, 
                WorkMood: ${e.workMood}, 
                Health-Rate: ${e.healthRate} 
            `);
        
        
    } else if (choice == 5) {
        let officeName = prompt("Enter Office name"),
            office = offices.find((off) => off.name === officeName);
        if (!office) {
            alert("office doesn't exist");
            continue;
        }

        let rank = prompt("Enter mngr or nrml:");
        let empname = prompt("Enter name: "),
            money = prompt("Enter money: "),
            sleepMode = prompt("Enter sleepMode: "),
            healthRate = prompt("Enter healthRate: "),
            email = prompt("Enter email: "),
            workMood = prompt("Enter workMood: "),
            salary = prompt("Enter salary: ");
        rank = (rank === "mngr" ? true : false);

        office.hire(new Employee(empname, money, sleepMode, healthRate, email, workMood, salary,rank));

    } else if (choice == 6) {
        let officeName = prompt("Enter Office name"),
            office = offices.find((off) => off.name === officeName);
        if (!office) {
            alert("office doesn't exist");
            continue;
        }

        let id = prompt("Enter Employ id: ");
        office.fire(+id);

    } else if (choice == 7) {
        break;
    } else {
        alert("invalid choice");
    }
}