const array = [10, 12, 11, 15, 14];

const elementNumber = array.length;
console.log(elementNumber);

array[3] = 50;
console.log(array);

array.splice(2, 0, 24, 25);
array.push(35);
array.unshift(36);
console.log(array);

array.splice(3, 1);
array.pop();
array.shift();
console.log(array);
