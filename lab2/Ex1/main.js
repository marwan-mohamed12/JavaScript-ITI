
while (true) {
    
    let age = prompt("Enter your Age: ");

    // Check if age isn't positive
    if (age < 0) {
        alert("Age must be a positive number");
        continue;
    }

    // Break if user clicked cancel 
    if (!age) {
        break;
    }

    // Check the status of the user age
    if (age >= 1 && age <= 10) {
        alert("User Status: Child");
    } else if (age >= 11 && age <= 18) {
        alert("User Status: Teenager");
    } else if (age >= 19 && age <= 50) {
        alert("User Status: Grown up");
    } else {
        alert("User Status: Old");
    }

}
