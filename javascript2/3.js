// FixStart Function
function fixStart(str) {
    if (str.length < 1) {
        return str;
    }
    
    // Get the first character
    const firstChar = str.charAt(0);
    
    // Replace all occurrences of the first character (except the first position) with '*'
    const replacedString = firstChar + str.slice(1).replace(new RegExp(firstChar, 'g'), '*');
    
    return replacedString;
}

// Test the function
function testFixStart() {
    const inputString = prompt("Enter a string to fix:");
    
    if (inputString && inputString.length >= 1) {
        const result = fixStart(inputString);
        console.log(`Result of fixStart('${inputString}'): '${result}'`);
        alert(`Result: '${result}'`);
    } else {
        console.log("Please enter a string with at least one character!");
        alert("Please enter a string with at least one character!");
    }
}

// Examples
console.log(`Example: fixStart('babble'): '${fixStart('babble')}'`); // 'ba**le'

// Call the test function
testFixStart();