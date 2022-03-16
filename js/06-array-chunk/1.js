function chunk(array, size) {
    let newArray = [];

    array.forEach((el, i) => {
        newArray.push([array[i]]);
    });


    return newArray;
}

console.log(chunk([1,2,3,4,5,6,7], 2));