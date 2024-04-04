// 8. Check If Two Strings Are Anagrams
// Given two strings str1 and str2, return true if str1 is an anagram of str2, otherwise return false.
// Input: str1 = "listen", str2 = "silent"
// Output: true

var myStr1 = "listen"
var myStr2 = "silent"
var newStr1 = myStr1.split('').sort().join('')
var newStr2 = myStr2.split('').sort().join('')
if(newStr1 == newStr2){
    console.log("its an anagram");
}else{
    console.log("its not an anagram");
}