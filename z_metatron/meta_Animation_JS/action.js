impressionDeTousLesNombres = 1; 

function go(){
    spirale3D();
    racineCubique();
    if (impressionDeTousLesNombres == 1){imprimer();}
    else if (impressionDeTousLesNombres == 0){imprimerP();}
    else if (impressionDeTousLesNombres == 2){imprimerNombresPairs();}
    else {imprimer3();}
    editionNombre();
} 

// function go(){
//     spirale3D();
//     racineCubique();
//     imprimer3();
//     editionNombre();
// }


function editionNombre(){
    nombreEdite.innerHTML = nombre;
}

frequenceV = 200;
stopStop = 0;
function gogo(){
    stopStop = 0;
    var co3 = setInterval(
        function createSpi(){
            go();
            if(stopStop == 1){
                clearInterval(co3);
            }
        }
        , frequenceV);
}

function stop(){stopStop = 1;}
