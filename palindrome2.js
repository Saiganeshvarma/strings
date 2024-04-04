// 3. Determine If a String Is a Palindrome
// Given a string str, return true if str is a palindrome, otherwise return false.
// Input: str = "racecar"
// Output: true

var mystr = "sai ganesh"
var newStr = mystr.split('').reverse().join('')
if(mystr == newStr){
    console.log(true);
}else{
    console.log(false);
}