let calcSum = (values) => {
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        sum += values[i];
    }
    return sum;
};

let calcAvg = (values) => {
    return calcSum(values) / values.length;
}

let numOfValues = prompt("Enter Number Of Values: "),
    values = [];

for (let i = 0; i < +numOfValues; i++) {
    let val = prompt(`Enter value ${i + 1}: ` );
    values.push(+val);
}

alert(`The Sum of Values = ${calcSum(values)}`);
alert(`The Avg of Values = ${calcAvg(values)}`);

