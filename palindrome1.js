// 3. Determine If a String Is a Palindrome
// Given a string str, return true if str is a palindrome, otherwise return false.
// Input: str = "racecar"
// Output: true

var myStr = "racecare"
var isPalindrome = true
for(var i = 0 ; i<=myStr.length/2 ; i++){
    if(myStr[i] != myStr[myStr.length-i-1]){
        isPalindrome = false
    }
}
if(isPalindrome == true){
    console.log("its a plaidrome");
}else{
    console.log("its not a paidrome");
}