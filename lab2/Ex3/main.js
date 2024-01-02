let clockConv = (clock) => {

    let timeDiff = clock - 12
    
    if (clock === 0) {
        return `12 AM`
    } else if (clock === 12) {
        return `12 PM`
    }else if (timeDiff < 0) {
        return `${clock} AM`
    }else {
        return `${timeDiff} PM`
    }
}

while (true) {
    let clock = prompt("Enter The Time in 24 Hours Format: ");
    
    if (clock < 0 || clock > 23) {
        alert("Enter the time from (0 to 23)");
    } else {
        document.write(`<h1>${+clock} in 12-Hours Format = ${clockConv(+clock)}</h1>`)
        break;
    }
}



