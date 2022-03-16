function isAnagram(a, b) {
    const aCharMap = charMap(a);
    const bCharMap = charMap(b);

    if (Object.keys(aCharMap) !== Object.keys(bCharMap)) {
        return false;
    }

    for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }

    return true;  
}

console.log(isAnagram("Akos!", "skao"));

function charMap(string) {
    const chars = {};

    for (let char of string.replace(/[^\w]/g, "").toLowerCase()) {
      charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}