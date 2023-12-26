let firstName = prompt("Enter Your First Name: "),
    lastName = prompt("Enter Your Last Name: "),
    fullName = confirm(`Your Full Name is ${firstName} ${lastName} ?`),
    yearOfBirth = prompt("Enter the year of birth: "),
    age = 2023 - yearOfBirth;

alert(`Welcome ${firstName} ${lastName}, You are ${age} years old`);

document.write(`
    <h2>Information</h2>
    <ul>
        <li>Full Name: ${firstName} ${lastName}</li>
        <li>Age: ${age}</li>
    </ul>
`);