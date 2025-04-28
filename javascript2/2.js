// MixUp Function
function mixUp(str1, str2) {
    // Swap first two characters of each string
    const newStr1 = str2.slice(0, 2) + str1.slice(2);
    const newStr2 = str1.slice(0, 2) + str2.slice(2);
    
    // Return concatenated result
    return `${newStr1} ${newStr2}`;
}

// Test the function
function testMixUp() {
    const string1 = prompt("Enter first string (at least 2 characters):");
    const string2 = prompt("Enter second string (at least 2 characters):");
    
    if (string1.length >= 2 && string2.length >= 2) {
        const result = mixUp(string1, string2);
        console.log(`Result of mixUp('${string1}', '${string2}'): '${result}'`);
        alert(`Result: '${result}'`);
    } else {
        console.log("Both strings must be at least 2 characters long!");
        alert("Both strings must be at least 2 characters long!");
    }
}

// Examples
console.log(`Example: mixUp('mix', 'pod'): '${mixUp('mix', 'pod')}'`); // 'pox mid'
console.log(`Example: mixUp('dog', 'dinner'): '${mixUp('dog', 'dinner')}'`); // 'dig donner'

// Call the test function
testMixUp();