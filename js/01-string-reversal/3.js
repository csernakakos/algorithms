function reverse(str) {
    return str
            .split("")
            .reduce((rev, char) => {
                // debugger;
                return char + rev;
            }, "");
}


reverse("akos");
console.log(reverse("akos"));