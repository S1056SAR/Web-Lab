// The Cash Register
function cashRegister(cart) {
    // Initialize total price
    let totalPrice = 0;
    
    // Iterate through the items in the cart
    for (const item in cart) {
        // Convert the price from string to number and add it to total
        totalPrice += parseFloat(cart[item]);
    }
    
    // Return the total price
    return totalPrice.toFixed(2);
}

// Example cart
const cartForParty = {
    banana: "1.25",
    handkerchief: "0.99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
};

// Calculate and display total price
const totalPrice = cashRegister(cartForParty);
console.log(`Total price: $${totalPrice}`);

// Function to create and calculate a user cart
function createUserCart() {
    const cart = {};
    let addMoreItems = true;
    
    while (addMoreItems) {
        const itemName = prompt("Enter item name (or click Cancel to finish):");
        
        if (!itemName) {
            addMoreItems = false;
            continue;
        }
        
        const itemPrice = prompt(`Enter price for ${itemName}:`);
        
        // Validate price input
        if (!itemPrice || isNaN(parseFloat(itemPrice))) {
            alert("Please enter a valid price!");
            continue;
        }
        
        cart[itemName] = itemPrice;
    }
    
    // Calculate total price
    const total = cashRegister(cart);
    
    // Display cart and total
    let cartDisplay = "Shopping Cart:\n\n";
    
    for (const item in cart) {
        cartDisplay += `${item}: $${cart[item]}\n`;
    }
    
    cartDisplay += `\nTotal: $${total}`;
    
    console.log(cartDisplay);
    alert(cartDisplay);
}

// Calculate total for example cart
console.log("Example Cart:");
console.log(`cashRegister(cartForParty): $${cashRegister(cartForParty)}`);

// Create and calculate user cart
console.log("\nUser Cart:");
createUserCart();