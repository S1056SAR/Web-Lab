function charFreq(word){
    let freq = {};
    for (let char of word) {
        freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
}
console.log(charFreq("abbabcbdbabdbdbabababcbcbab"));