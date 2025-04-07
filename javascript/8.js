function Longest_Word_in_array(arr){
    let longestWord="";
    for(i=0;i<arr.length;i++){
        if(arr[i].length>longestWord.length){
            longestWord=arr[i];
        }
    }
    return longestWord;
}
console.log(Longest_Word_in_array(["this","is","fun"]));