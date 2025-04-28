// Verbing Function
function verbing(str) {
    // If the string is less than 3 characters, leave it unchanged
    if (str.length < 3) {
        return str;
    }
    
    // If it already ends with 'ing', add 'ly'
    if (str.slice(-3) === 'ing') {
        return str + 'ly';
    }
    
    // Otherwise, add 'ing'
    return str + 'ing';
}

// Test the function
function testVerbing() {
    const inputString = prompt("Enter a string to verb:");
    
    if (inputString) {
        const result = verbing(inputString);
        console.log(`Result of verbing('${inputString}'): '${result}'`);
        alert(`Result: '${result}'`);
    } else {
        console.log("Please enter a string!");
        alert("Please enter a string!");
    }
}

// Examples
console.log(`Example: verbing('swim'): '${verbing('swim')}'`); // 'swimming'
console.log(`Example: verbing('swimming'): '${verbing('swimming')}'`); // 'swimmingly'
console.log(`Example: verbing('go'): '${verbing('go')}'`); // 'go'

// Call the test function
testVerbing();