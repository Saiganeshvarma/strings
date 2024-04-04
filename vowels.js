// 2. Count the Number of Vowels in a Given String
//  Nb Given a string str, return the number of vowels in the string.
// Input: str = "Hello World"
// Output: 3

var myStr = "sai"
var vowels = ["a","e","i","o","u"]
var count = 0
for(var i = 1 ; i<=myStr.length ; i++){
    for(var j = 1 ; j<=vowels.length ; j++){
        if(myStr[i] == vowels[j]){
            count ++
        }
    }
    
}
console.log(count);