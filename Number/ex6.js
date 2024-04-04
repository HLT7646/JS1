function sortDigitsToMin(number) {
    const digits = Array.from(String(number), Number);
    digits.sort((a, b) => a - b);
    const minNumber = Math.min(...digits.filter(num => num !== 0));
    digits.splice(digits.indexOf(minNumber), 1);
    digits.unshift(minNumber);
    result =  digits.join('');
    return result;
}
const myNumber = 10220013545;
const minSortedNumber = sortDigitsToMin(myNumber);
console.log(minSortedNumber); 