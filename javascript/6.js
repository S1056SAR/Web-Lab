function reverse(str){
    let str_result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        str_result += str[i];
    }
    return str_result;
}
console.log(reverse("this is fun"));