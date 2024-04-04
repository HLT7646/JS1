function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
function sumPrime(number){
    let sum = 0 ;
    for (i=0;i<=number;i++){
         isPrime(i)? (sum+=i):""
     }
    return sum  
}

let number = 5;
console.log(sumPrime(number))