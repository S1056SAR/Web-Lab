let names = [];
while (true) {
    const name = prompt("Enter a name (or click Cancel to finish):");
    if (name === null) {
        break;
    }
    if (name.trim() !== "") {
        names.push(name.trim());
    }
}
names.sort();
let outputHTML = "<ol>";
for (const name of names) {
    outputHTML += `<li>${name}</li>`;
}
outputHTML += "</ol>";
document.body.innerHTML = outputHTML;

if (names.length === 0) {
    document.body.innerHTML = "<p>No names were entered.</p>";
}