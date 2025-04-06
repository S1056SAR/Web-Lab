const count = parseInt(prompt("How many random numbers do you wish to generate?"));
if (isNaN(count) || count <= 0) {
    alert("Please enter a valid positive number.");
} else {
    const numbers = [];
    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        numbers.push(randomNumber);
    }
    const sum = numbers.reduce((total, num) => total + num, 0);
    const average = sum / numbers.length;
    let result = `Generated ${count} random numbers:\n${numbers.join(", ")}\n\n`;
    result += `Sum: ${sum}\n`;
    result += `Average: ${average.toFixed(2)}\n`;
    alert(result);
    document.body.innerHTML = `
        <h2>Random Number Generator Results</h2>
        <p>Generated ${count} random numbers:</p>
        <p>${numbers.join(", ")}</p>
        <p>Sum: ${sum}</p>
        <p>Average: ${average.toFixed(2)}</p>
    `;
}