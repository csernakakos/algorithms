myNumber.toString();
parseInt(myNumber.toString());
Math.sign();

function reverseInteger(integer) {
    const str = Math.abs(integer).toString();
    const rev = str
        .split("")
        .reduce((rev, char) => {
            return char + rev;
        }, "");

    // if (integer < 0) {
    //     return parseInt(rev * -1);
    // };
    // return parseInt(rev);

    return parseInt(rev) * Math.sign(n);
}

reverseInteger(-502);

