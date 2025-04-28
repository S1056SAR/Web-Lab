
function squareNumber(num) {
    const result = num * num;
    console.log(`The result of squaring the number ${num} is ${result}.`);
    return result;
}

function halfNumber(num) {
    const result = num / 2;
    console.log(`Half of ${num} is ${result}.`);
    return result;
}

function percentOf(num1, num2) {
    const result = (num1 / num2) * 100;
    console.log(`${num1} is ${result}% of ${num2}.`);
    return result;
}

function areaOfCircle(radius) {
    const area = Math.PI * radius * radius;
    console.log(`The area for a circle with radius ${radius} is ${area}.`);
    const roundedArea = Math.round(area * 100) / 100;
    console.log(`The rounded area is ${roundedArea}.`);
    
    return area;
}
function performOperations(num) {
    const half = halfNumber(num);
    const squared = squareNumber(half);
    const area = areaOfCircle(squared);
    const percentage = percentOf(area, squared * squared);
    
    return percentage;
}

function testFunctions() {
    const num = parseFloat(prompt("Enter a number to test all functions:"));
    if (!isNaN(num)) {
        console.log("Testing individual functions:");
        squareNumber(num);
        halfNumber(num);
        percentOf(num, num * 2);
        areaOfCircle(num);
        
        console.log("Testing combined operations:");
        const result = performOperations(num);
        console.log(`Final result: ${result}`);
    } else {
        console.log("Invalid number entered!");
    }
}

testFunctions();