function isItAPrimeNumber(){
    isItPrime = 0;
    numberStudied = nombre;
    (numberStudied < 2) ? isItPrime = 0 : (numberStudied == 2) ? isItPrime = 1 :
    sieveOfEratosthenes(numberStudied);
}

function sieveOfEratosthenes(numberStudied){
        squareRoot = Math.floor(Math.sqrt(numberStudied))
        divisorModulus6 = 'Ø' ; divisor = 2
        do{
            remainder = numberStudied % divisor
            if (divisor > 3){
                (divisorModulus6 == 1) ? divisor += 4 : divisor += 2;
                (divisorModulus6 == 1) ? divisorModulus6 = 5 : divisorModulus6 = 1
            }
            if (divisor == 3) divisor = 5
            if (divisor == 2) divisor = 3
        }
        while ( divisor <= squareRoot && remainder != 0)
        (remainder == 0) ? isItPrime = 0 : isItPrime = 1
}