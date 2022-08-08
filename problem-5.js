function arrayFunc(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element > 0) {
            newArray.push(element);
        } else {
            break;
        }
    }
    return newArray;
}

const numbers = [10, 15, 12, 14, -23, 24];

console.log(arrayFunc(numbers));
