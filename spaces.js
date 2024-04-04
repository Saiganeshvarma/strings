// 9. Remove All Spaces From a String
// Given a string str, return a new string that has all spaces removed.
// Input: str = "hello world"
// Output: "helloworld"
var myStr = "hello world"
var newStr = ""
for(var i = 0 ; i<myStr.length ; i++){
    if(myStr[i] != " "){
        newStr += myStr[i]

    }
}
console.log(newStr);