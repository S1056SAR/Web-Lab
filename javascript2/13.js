// Credit Card Validation
function validateCreditCard(cardNumber) {
    // Remove all dashes from the number
    cardNumber = cardNumber.replace(/-/g, '');
    
    // Check if the number is 16 digits long
    if (cardNumber.length !== 16) {
        return {
            valid: false,
            number: cardNumber,
            error: 'wrong_length'
        };
    }
    
    // Check if all characters are numbers
    const numberRegex = /^\d+$/;
    if (!numberRegex.test(cardNumber)) {
        return {
            valid: false,
            number: cardNumber,
            error: 'invalid_characters'
        };
    }
    
    // Check if there are at least two different digits
    const uniqueDigits = new Set(cardNumber.split(''));
    if (uniqueDigits.size < 2) {
        return {
            valid: false,
            number: cardNumber,
            error: 'not_enough_unique_digits'
        };
    }
    
    // Check if the final digit is even
    const finalDigit = parseInt(cardNumber.charAt(cardNumber.length - 1));
    if (finalDigit % 2 !== 0) {
        return {
            valid: false,
            number: cardNumber,
            error: 'odd_final_digit'
        };
    }
    
    // Calculate sum of all digits
    let sum = 0;
    for (let i = 0; i < cardNumber.length; i++) {
        sum += parseInt(cardNumber.charAt(i));
    }
    
    // Check if sum is greater than 16
    if (sum <= 16) {
        return {
            valid: false,
            number: cardNumber,
            error: 'sum_too_low'
        };
    }
    
    // If all checks pass, the card is valid
    return {
        valid: true,
        number: cardNumber
    };
}

// Test the function with some examples
function testValidation() {
    const validCards = [
        '9999-9999-8888-0000',
        '6666-6666-6666-1666'
    ];
    
    const invalidCards = [
        'a923-3211-9c01-1112', // invalid characters
        '4444-4444-4444-4444', // only one type of number
        '1111-1111-1111-1110', // sum less than 16
        '6666-6666-6666-6661'  // odd final number
    ];
    
    console.log("Valid cards test:");
    for (let i = 0; i < validCards.length; i++) {
        const result = validateCreditCard(validCards[i]);
        console.log(`${validCards[i]}: ${result.valid ? 'Valid' : 'Invalid'}`);
        console.log(result);
    }
    
    console.log("\nInvalid cards test:");
    for (let i = 0; i < invalidCards.length; i++) {
        const result = validateCreditCard(invalidCards[i]);
        console.log(`${invalidCards[i]}: ${result.valid ? 'Valid' : 'Invalid'}`);
        console.log(result);
    }
}

// Function to validate user input credit card
function validateUserCard() {
    const cardNumber = prompt("Enter a credit card number (format: xxxx-xxxx-xxxx-xxxx):");
    
    if (!cardNumber) {
        alert("No credit card number entered!");
        return;
    }
    
    const result = validateCreditCard(cardNumber);
    
    let message = `Card Number: ${cardNumber}\n\n`;
    message += `Valid: ${result.valid}\n`;
    
    if (!result.valid) {
        message += `Error: ${result.error}\n\n`;
        
        // Add helpful explanation based on error type
        switch (result.error) {
            case 'wrong_length':
                message += "The card number must be 16 digits.";
                break;
            case 'invalid_characters':
                message += "The card number must contain only digits.";
                break;
            case 'not_enough_unique_digits':
                message += "The card number must have at least 2 different digits.";
                break;
            case 'odd_final_digit':
                message += "The final digit must be even.";
                break;
            case 'sum_too_low':
                message += "The sum of all digits must be greater than 16.";
                break;
        }
    } else {
        message += "This credit card is valid!";
    }
    
    console.log(message);
    alert(message);
}

// Run example tests
console.log("Example Credit Card Validation Tests:");
testValidation();

// Validate user input credit card
console.log("\nUser Credit Card Validation:");
validateUserCard();