function reverse(str) {
    let reversed = [];
    let arr = str.split("");

    for (let i = arr.length -1; i >= 0; i--) {
        reversed.push(arr[i]);
    };

    return reversed;
}

reverse("akos");
console.log(reverse("akos"));