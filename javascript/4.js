
function translate(str) {
    let str_result = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if ("abcdfghjklmnpqrstvwxyzABCDFGHJKLMNPQRSTVWXYZ".includes(char)) {
            str_result += char + "o" + char;
        } else {
            str_result += char;
        }
    }
    return str_result;
}
console.log(translate("this is fun"));