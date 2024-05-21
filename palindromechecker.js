function palindrome(str){
    for (i=0; i<str.lenth/2; 1++){
        if (str[i] !== str[str.length -1-i]){
            return false
        }
    } return true
}console.log(palindrome("dad"))