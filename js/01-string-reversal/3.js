function reverse(str) {
    return str
            .split("")
            .reduce((rev, char) => char + rev, "");
}



reverse("akos");
console.log(reverse("akos"));