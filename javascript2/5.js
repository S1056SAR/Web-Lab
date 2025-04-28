// Not Bad Function
function notBad(str) {
    // Find the indices of 'not' and 'bad' in the string
    const notIndex = str.indexOf('not');
    const badIndex = str.indexOf('bad');
    
    // Check if both 'not' and 'bad' are in the string, and 'bad' comes after 'not'
    if (notIndex !== -1 && badIndex !== -1 && badIndex > notIndex) {
        // Replace the substring from 'not' to 'bad' (including 'bad') with 'good'
        return str.slice(0, notIndex) + 'good' + str.slice(badIndex + 3);
    }
    
    // Otherwise, return the original string
    return str;
}

// Test the function
function testNotBad() {
    const inputString = prompt("Enter a string to check if it's 'not bad':");
    
    if (inputString) {
        const result = notBad(inputString);
        console.log(`Result of notBad('${inputString}'): '${result}'`);
        alert(`Result: '${result}'`);
    } else {
        console.log("Please enter a string!");
        alert("Please enter a string!");
    }
}

// Examples
console.log(`Example: notBad('This dinner is not that bad!'): '${notBad('This dinner is not that bad!')}'`); // 'This dinner is good!'
console.log(`Example: notBad('This movie is not so bad!'): '${notBad('This movie is not so bad!')}'`); // 'This movie is good!'
console.log(`Example: notBad('This dinner is bad!'): '${notBad('This dinner is bad!')}'`); // 'This dinner is bad!'

// Call the test function
testNotBad();