function sum(number) {
    const factors = [];
  
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        factors.push(i);
      }
    }
    console.log(factors)
    let result = factors.reduce(function(total, value){
        return total + value;
    });
    
    return result;
  }
  const number = 10;
  console.log(sum(number)); 