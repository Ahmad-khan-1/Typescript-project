function square(num) {
    return num * num;
}
const result = square(5);
console.log(result);
function getAverage(numbers) {
    const sum = numbers.reduce((acc, n) => acc + n, 0);
    return sum / numbers.length;
}
const avgResult = getAverage([2, 14, 26, 8]);
console.log(avgResult);
function raiseTo(base, exponent) {
    return base ** 2;
}
const raisedResult = raiseTo(3);
console.log(raisedResult);
export {};
