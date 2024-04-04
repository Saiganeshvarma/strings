// 7. Remove Duplicate Characters From a String
// Given a string str, return a new string that has all duplicate characters removed.
// Input: str = "hello"
// Output: "helo"

var myStr = "hello"
var newStr = ""
for(var i = 0 ; i<myStr.length ; i++){
    if(!newStr.includes(myStr[i])){
        newStr += myStr[i]
    }
}
console.log(newStr);