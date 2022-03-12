function reverse(string) {
    let reversed = "";
    // for (let i = arr.length -1; i >= 0; i--) {
    //     reversed.push(arr[i]);
    // };

    // Avoid the traditional for loop whenever you can. Instead, use a for... of loop:
    
    for (let character of string) {
        reversed = character + reversed;
    };

    return reversed;
}

reverse("akos");
console.log(reverse("akos"));