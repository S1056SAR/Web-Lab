// The Pluralizer Function
function pluralize(noun, number) {
    // Define irregular plural nouns
    const irregularNouns = {
        'sheep': 'sheep',
        'goose': 'geese',
        'child': 'children',
        'person': 'people',
        'mouse': 'mice',
        'deer': 'deer',
        'fish': 'fish',
        'ox': 'oxen',
        'foot': 'feet',
        'tooth': 'teeth'
    };
    
    // If number is 1, return singular
    if (number === 1) {
        return `${number} ${noun}`;
    }
    
    // Check if the noun has an irregular plural form
    if (irregularNouns[noun]) {
        return `${number} ${irregularNouns[noun]}`;
    }
    
    // Apply regular pluralization rules
    return `${number} ${noun}s`;
}

// Test the function with various nouns and numbers
function testPluralize() {
    const noun = prompt("Enter a noun:");
    const number = parseInt(prompt("Enter a number:"));
    
    if (noun && !isNaN(number)) {
        const result = pluralize(noun, number);
        console.log(`Result: ${result}`);
        alert(`Result: ${result}`);
    } else {
        console.log("Please enter a valid noun and number!");
        alert("Please enter a valid noun and number!");
    }
}

// Examples
console.log(pluralize('cat', 5)); // "5 cats"
console.log(pluralize('dog', 1)); // "1 dog"
console.log(pluralize('sheep', 3)); // "3 sheep"
console.log(pluralize('goose', 2)); // "2 geese"

// Call the test function
testPluralize();