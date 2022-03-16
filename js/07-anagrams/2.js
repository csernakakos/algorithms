function isAnagram(stringA, stringB) {
    stringA = cleanString(stringA);
    stringB = cleanString(stringB);

    return stringA === stringB;

}

function cleanString(string) {
    return string
        .replace(/[^\w]/g ,"")
        .toLowerCase()
        .split("")
        .sort()
        .join("");
}