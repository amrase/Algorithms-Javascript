//Check Prime
function isPrime(n){
    let divisor = 2;
    while(n>divisor){
        if(n%divisor == 0){
            return false;
        }
        else divisor++;
    }
    return true;
}

// console.log(isPrime(101))
// console.log(isPrime(237))
 

//Prime factory
function primeFactors(n){
    let factors = [];
    divisor = 2;
    while(n>2){
        if(n% divisor == 0){
            factors.push(divisor);
            n=n/divisor;
        }
        else{
            divisor++;
        }
    }
    return factors;
}

// console.log(primeFactors(69))

//fibonnaci sum
function fibonnaci(n){
    if(n<=1) return n;
    else  return fibonnaci(n-1) + fibonnaci(n-2);
}
// console.log(fibonnaci(144))


