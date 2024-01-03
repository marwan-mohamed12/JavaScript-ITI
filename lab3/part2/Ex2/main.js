let contacts = [];

let addContact = (name, phoneNumber) => {
    let phoneBook = {
        name,
        phoneNumber 
    }
    contacts.push(phoneBook);
}

let searchContact = (keyword) => {
    return contacts.findIndex((ele) => ele.name === keyword || ele.phoneNumber === keyword);
}

while (true) {
    
    let choice = prompt("Choose Operation (add , search or exit)");

    if (choice === "add") {
        let name = prompt("Enter name: "),
            phoneNumber = prompt("Enter Phone Number: ");

        addContact(name, phoneNumber);
        
    } else if (choice === "search") {
        let keyword = prompt("Enter something to search with: "),
            index = searchContact(keyword);

            if (index === -1) {
                alert("This name or phoneNumber doesn't exist!");
            } else {
                alert(`Name: ${contacts[index].name}, \nPhone Number: ${contacts[index].phoneNumber}`)
            }
        
    } else if (choice === "exit") {
        break;
    } else {
        alert("Invalid Choice")
    }
}

console.log(contacts);