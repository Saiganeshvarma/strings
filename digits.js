// 6. Check If a String Contains Only Digits
// Given a string str, return true if str contains only digits, otherwise return false.
// Input: str = "12345"
// Output: true

var myStr = "12k345"
var containsDigits = true
for(var i = 0 ; i<myStr.length ; i++){
    if(!(myStr[i] >= "0" && myStr[i] >= "9") ){
        containsDigits = false
        break;
    }
}
if(containsDigits == true){
    console.log(true);
}else{
    console.log(false);
}