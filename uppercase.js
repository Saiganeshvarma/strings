// 4. Capitalize the First Letter of Each Word in a String
// Given a string str, return a new string where the first letter of each word is capitalized.
// Input: str = "hello world"
// Output: "Hello World"

var myStr = "hello world"
var words = myStr.split(" ")

for(var i = 0 ; i<words.length ; i++){
    words[i] = words[0].toUpperCase() + words[1].substring(1);
}
var newStr = words.join(' ')
console.log(newStr);