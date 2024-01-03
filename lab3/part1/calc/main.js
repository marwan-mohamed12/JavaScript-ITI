let validateInput = (index) => {
    let num = prompt(`Enter ${index} Number: `);
    while (isNaN(+num) || num === "") {
        alert("Make sure your entered number not string or empty string");
        num = prompt(`Enter ${index} Number: `);
    }
    return num;
},
    validateOp = () => {
        let op = prompt("Enter Operator: ");

        while (op !== "+" && op !== "-" && op !== "*" && op !== "/" && op !== "%") {
            alert("invalid, choose from the list of operations (+, -, *, /, %)");
            op = prompt("Enter Operator: ");
        }

        return op;
    };

let add = (num1, num2) => num1 + num2,
    multi = (num1, num2) => num1 * num2,
    subtract = (num1, num2) => num1 - num2,
    division = (num1, num2) => num1 / num2,
    moduls = (num1, num2) => num1 % num2;

let calc = (num1, num2, op) => {
    if (op === "+") {
        return add(num1, num2);
    } else if (op === "-") {
        return subtract(num1, num2);
    } else if (op === "/") {
        return division(num1, num2);
    } else if (op === "*") {
        return multi(num1, num2);
    } else if (op === "%") {
        return moduls(num1, num2);
    } else {
        console.log("invalid");
        return;
    }
};

let num1 = validateInput("First");

let op = validateOp("Enter Operator: ");

let num2 = validateInput("Second");

alert(`${num1} ${op} ${num2} = ${calc(+num1, +num2, op)}`);
