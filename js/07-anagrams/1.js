function isAnagram(a, b) {
    //sanitize data
    a = a.replace(/[^\w]/g, "").toLowerCase();
    b = b.replace(/[^\w]/g, "").toLowerCase();

    const charMapA = charMap(a);
    const charMapB = charMap(b);

    console.log(charMapA, "<<<")
    console.log(charMapB, "<<<")
  
}

console.log(isAnagram("Akos!", "skao"));

function charMap(string) {
    const chars = {};
    let max = 0;
    let maxChar = "";

    for (let char of string) {
        (!chars[char]) 
            ? chars[char] = 1
            : chars[char] = chars[char] + 1;
    }

    for (let char in chars) {
        if (chars[char] > max) {
            max = chars[char];
            maxChar = char;
        }
    }
    return chars;
}