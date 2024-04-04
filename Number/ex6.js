function sortDigitsToMin(number) {
    const digits = Array.from(String(number), Number);
    digits.sort((a, b) => a - b);
    
    result =  parseInt(digits.join('')) ;
    return result;
}
const myNumber = 10220013545;
const minSortedNumber = sortDigitsToMin(myNumber);
console.log(minSortedNumber); 