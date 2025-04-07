function processForm() {
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const hometown = document.getElementById('hometown').value;
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - age;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    const userInfo = document.createElement('p');
    userInfo.textContent = `${name} was born in ${birthYear}`;
    resultDiv.appendChild(userInfo);
    const hometownLink = document.createElement('a');
    hometownLink.href = `https://www.google.com/search?q=${encodeURIComponent(hometown)}`;
    hometownLink.textContent = `Search for ${hometown}`;
    hometownLink.target = '_blank'; 
    const linkParagraph = document.createElement('p');
    linkParagraph.appendChild(hometownLink);
    resultDiv.appendChild(linkParagraph);
    return false;
}