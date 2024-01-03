let username = prompt("Enter User Name: "), password;

if (username === "admin") {
    password = prompt("Enter User Password");                       
    if (password === "421$$") {
        alert("User Logged Successfully")
    } else {
        alert("Incorrect Password");
    }
} else {
    alert("Incorrect User Name");
}