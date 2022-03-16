function chunk(array, size) {
    let chunk = [];

    for (let item of array) {
        const last = chunk[chunk.length - 1];
        if (!last || last.length === size) {
            chunk.push([item]);
        } else {
            last.push(item);
        }
    };

    return chunk;
};

console.log(chunk([1,2,3,4,5,6,7], 2));