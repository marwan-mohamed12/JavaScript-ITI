let vowels = {
    "A" : 0,
    "E" : 0,
    "O" : 0,
    "U" : 0,
    "I" : 0,
};

let str = prompt("Enter String: ");

for (const char of str) {
    switch (char) {
        case 'a':
        case 'A':
            vowels.A += 1; 
            break;

        case 'e':
        case 'E':
            vowels.E += 1; 
            break;
    
        case 'o':
        case 'O':
            vowels.O += 1; 
            break;

        case 'u':
        case 'U':
            vowels.U += 1; 
            break;

        case 'i':
        case 'I':
            vowels.I += 1; 
            break;

        default:
            break;
    }
}

document.write(`
    <h2>Count of Vowels</h2>
    <ul style="font-size: 25px;">
        <li>A: ${vowels.A}</li>
        <li>E: ${vowels.E}</li>
        <li>O: ${vowels.O}</li>
        <li>U: ${vowels.U}</li>
        <li>I: ${vowels.I}</li>
    </ul>
`);