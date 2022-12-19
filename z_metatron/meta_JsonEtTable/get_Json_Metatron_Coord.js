//changement isItPrime No Yes 0 1

CQJV = document.getElementById('CQJV');
params_init_metatron();
CQJV.innerHTML = '{<br>&nbsp;&nbsp;"number"&nbsp;:&nbsp;[<br>&nbsp;&nbsp;&nbsp;&nbsp;';
while(nombre < 343){
    spirale3D_metatron();
    isItAPrimeNumber();
    CQJV.innerHTML +=
    nombre + ',' + 
    cubeX + ',' + 
    cubeY + ',' + 
    cubeZ + ',' + 
    quatrain + ',' +
    isItPrime + ',';
}
spirale3D_metatron();
isItAPrimeNumber();
CQJV.innerHTML +=
'"' +
nombre + ',' + 
cubeX + ',' + 
cubeY + ',' +
cubeZ + ',' +  
quatrain + ',' +
isItPrime + '"<br>&nbsp;&nbsp;&nbsp;&nbsp;';
CQJV.innerHTML += ']<br>}';
