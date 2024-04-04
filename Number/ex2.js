function calculateNumberBetween(a, b) {
    let sum = 0;
    if (a == b) {
        return sum 
    }
    else if (a < b) {
        for (i = a + 1; i < b; i++) {
            sum += i;
        }
    }
    else if (a > b) {
        for (i = b + 1; i < a; i++) {
            sum += i;
        }
    }
    return sum
}
const a = 3;
const b = 10;
console.log(calculateNumberBetween(a, b));