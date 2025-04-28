// The Recipe Card
function createRecipe() {
    // Create recipe object
    const recipe = {
        title: "Mole",
        servings: 2,
        ingredients: ["cinnamon", "cumin", "cocoa"]
    };
    
    // Log recipe information
    console.log(recipe.title);
    console.log(`Serves: ${recipe.servings}`);
    console.log("Ingredients:");
    for (let i = 0; i < recipe.ingredients.length; i++) {
        console.log(`${recipe.ingredients[i]}`);
    }
    
    return recipe;
}

// Function to create a recipe from user input
function createUserRecipe() {
    const title = prompt("Enter recipe title:");
    const servings = parseInt(prompt("Enter number of servings:"));
    
    if (!title || isNaN(servings)) {
        alert("Please enter valid recipe information!");
        return;
    }
    
    const ingredients = [];
    let moreIngredients = true;
    
    while (moreIngredients) {
        const ingredient = prompt("Enter an ingredient (or click Cancel to finish):");
        
        if (!ingredient) {
            moreIngredients = false;
        } else {
            ingredients.push(ingredient);
        }
    }
    
    const recipe = {
        title: title,
        servings: servings,
        ingredients: ingredients
    };
    
    // Format the recipe display
    let recipeDisplay = `${recipe.title}\n\n`;
    recipeDisplay += `Serves: ${recipe.servings}\n`;
    recipeDisplay += "Ingredients:\n";
    
    for (let i = 0; i < recipe.ingredients.length; i++) {
        recipeDisplay += `${recipe.ingredients[i]}\n`;
    }
    
    console.log(recipeDisplay);
    alert(recipeDisplay);
}

// Display default recipe
console.log("Default Recipe:");
createRecipe();

// Create user recipe
console.log("\nUser Recipe:");
createUserRecipe();