widthC = 50;

function rouge(){cube.style.background = "rgb(226, 11, 11)";}


function noir(){
    switch(quatrain){
        case 0 :cube.style.background = "rgb(100, 100, 100)";break;
        case 1 :cube.style.background = "rgb(150, 100, 75)";break;
        case 2 :cube.style.background = "rgb(200, 100, 50)";break;
        case 3 :cube.style.background = "rgb(250, 100, 25)";break;
    }
}

// function universP(){(premierValide == 1) ? rouge() : noir();}
function universP(){(isItPrime == 'Yes') ? rouge() : noir();}
function crible_Eratostene(){
    premierValide = 0;
    for (j = 2; j < Math.sqrt(nombre); j++){
        if (nombre % j === 0) break;
        else if(j + 1 > Math.sqrt(nombre)){premierValide = 1;}
    }
    if (nombre == 2){premierValide = 1;}
    if (nombre == 3){premierValide = 1;}
}

function faceDeCube(){
    face_C = '';
    halfC = widthC / 2;
    switch (i){
        case 0 : face_C = position + "translateZ("+halfC+"px) rotateX(90deg) translateZ("+halfC+"px)"; break;
        case 1 : face_C = position + "translateZ("+halfC+"px) rotateX(-90deg) translateZ("+halfC+"px)"; break;
        case 2 : face_C = position + "translateZ("+halfC+"px) rotateY(-90deg) translateZ("+halfC+"px)"; break;
        case 3 : face_C = position + "translateZ("+halfC+"px) rotateY(90deg) translateZ("+halfC+"px)"; break;
        case 4 : face_C = position + "rotateX(0deg) translateZ("+widthC+"px)"; break;
        case 5 : face_C = position + "rotateX(180deg)"; break;
    }
    cube.style.transform = face_C;
}

function nouveauCube(){
    cube = document.createElement('div');
    

    if (inscriptionV == true){
        cube.innerHTML = nombre;
        cube.style.fontSize = "2em";
        if(nombre > 99){cube.style.fontSize = "1em";}
    }



    cube.classList.add("face");
    cube.style.width = widthC +"px";
    cube.style.height = widthC +"px";
    universP(); faceDeCube(); spirale.appendChild(cube);
}



function imprimer(){
    xx = widthC*cubeX; yy = widthC*cubeY; zz = widthC*cubeZ;
    position = "translateX(" + xx + "px) translateY(" + yy 
    + "px) translateZ(" + zz + "px) ";
    // crible_Eratostene();
    principal();
    // paire();
    i = 0; while (i < 6){nouveauCube();i++;}
}

function imprimerP(){
    xx = widthC*cubeX; yy = widthC*cubeY; zz = widthC*cubeZ;
    position = "translateX(" + xx + "px) translateY(" + yy 
    + "px) translateZ(" + zz + "px) ";
    // crible_Eratostene();
    principal();
    if (isItPrime == 'Yes'){
        i = 0; while (i < 6){nouveauCube();i++;}
    }
    // paire();
    
}

function imprimer3(){
    xx = widthC*cubeX; yy = widthC*cubeY; zz = widthC*cubeZ;
    position = "translateX(" + xx + "px) translateY(" + yy 
    + "px) translateZ(" + zz + "px) ";
    // crible_Eratostene();
    principal();
    if (cubeX == 3){
        i = 0; while (i < 6){nouveauCube();i++;}
    }
    // paire();
}


function imprimerNombresPairs(){
    xx = widthC*cubeX; yy = widthC*cubeY; zz = widthC*cubeZ;
    position = "translateX(" + xx + "px) translateY(" + yy 
    + "px) translateZ(" + zz + "px) ";
    principal();
    //isItPrime == 'No';
    if (nombre % 2 == 0){
        i = 0; while (i < 6){nouveauCube();i++;}
    }
}



xS = 0; yS = 0; zS = 0;
function sommeP(){
    crible_Eratostene();
    if (premierValide == 1) {
        xS += cubeX; yS += cubeY; zS += cubeZ;

        xx = widthC*xS; yy = widthC*yS; zz = widthC*zS;
        position = "translateX(" + xx + "px) translateY(" + yy 
        + "px) translateZ(" + zz + "px) ";

        i = 0; while (i < 6){nouveauCube();i++;}
    }
}