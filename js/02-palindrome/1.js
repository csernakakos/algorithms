function palindrome(str) {

    // Reverse the string
    const reversed = str.split("").reduce((rev, char) => {
        return char + rev;
    }, "");

    return str === reversed;
}

console.log(palindrome("sakas"));

