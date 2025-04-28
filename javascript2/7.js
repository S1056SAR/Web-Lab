// The Array Exercise
function formatChoices() {
    // Create an array of top choices
    const topChoices = ["JavaScript", "Python", "TypeScript", "Java", "C#"];
    
    // Loop through the array and log each choice
    for (let i = 0; i < topChoices.length; i++) {
        // Basic output
        console.log(`My #${i+1} choice is ${topChoices[i]}.`);
        
        // Bonus: Format with correct ordinal suffix
        const position = i + 1;
        let suffix;
        
        if (position === 1) {
            suffix = "st";
        } else if (position === 2) {
            suffix = "nd";
        } else if (position === 3) {
            suffix = "rd";
        } else {
            suffix = "th";
        }
        
        console.log(`My ${position}${suffix} choice is ${topChoices[i]}.`);
    }
    
    return topChoices;
}

// Function to test with user's choices
function testWithUserChoices() {
    const numChoices = parseInt(prompt("How many favorite items would you like to enter?"));
    
    if (isNaN(numChoices) || numChoices <= 0) {
        alert("Please enter a valid number greater than 0!");
        return;
    }
    
    const choices = [];
    
    // Collect user choices
    for (let i = 0; i < numChoices; i++) {
        const choice = prompt(`Enter your #${i+1} choice:`);
        if (choice) {
            choices.push(choice);
        }
    }
    
    // Display results
    let resultText = "Your choices:\n\n";
    
    for (let i = 0; i < choices.length; i++) {
        const position = i + 1;
        let suffix;
        
        if (position === 1) {
            suffix = "st";
        } else if (position === 2) {
            suffix = "nd";
        } else if (position === 3) {
            suffix = "rd";
        } else {
            suffix = "th";
        }
        
        resultText += `My ${position}${suffix} choice is ${choices[i]}.\n`;
    }
    
    console.log(resultText);
    alert(resultText);
}

// Run the example
console.log("Example with predefined choices:");
formatChoices();

// Test with user input
testWithUserChoices();