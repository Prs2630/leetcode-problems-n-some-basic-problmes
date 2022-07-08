//program to check if the string is palindrome or not
//madam
function checkPalindrome(string) {
    const len = string.length
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return "not palindrome"

        }


    }
    return "it a palindrome"


}
const string = "madam";
const value = checkPalindrome(string)
console.log(value)