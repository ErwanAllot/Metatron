<?php
$isItPrime = 0;

function principal(){
    global $nombre;
    global $isItPrime;
    if ($nombre < 2) $isItPrime = 0;
    else if ($nombre == 2) $isItPrime = 1;
    else {
        $isItPrime = sieveOfEratosthenes();
    }
    return $isItPrime;
}

function sieveOfEratosthenes(){
    global $nombre;
    global $isItPrime;
    $squareRoot = floor(sqrt($nombre));
    $divisorModulus6 = 'Ã˜' ; 
    $divisor = 2;
    do{
        $remainder = $nombre % $divisor;
        if ($divisor > 3){
            if($divisorModulus6 == 1) $divisor += 4; 
            else $divisor += 2;
            if ($divisorModulus6 == 1) $divisorModulus6 = 5;
            else $divisorModulus6 = 1;
        }
        if ($divisor == 3) $divisor = 5;
        if ($divisor == 2) $divisor = 3;
    }
    while ( $divisor <= $squareRoot && $remainder != 0);
    if ($remainder == 0) $isItPrime = 0;
    else $isItPrime = 1;
    return $isItPrime;
}

?>