function filterLongWords(words, minLength) {
    let longWords = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > minLength) {
            longWords.push(words[i]);
        }
    }
    return longWords;
}
console.log(filterLongWords(["this", "is", "fun"], 2)); 