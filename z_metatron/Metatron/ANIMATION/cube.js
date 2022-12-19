widthC = 100;
var windowWidth = window.innerWidth;
widthCube();


function widthCube(){
    
    // switch(windowWidth){
    //     case windowWidth  > 200 :
    // }
    if (windowWidth  > 200 && windowWidth  <= 500) {widthC = 20;}
    else if (windowWidth  > 500 && windowWidth  <= 700) {widthC = 20;}
    else if (windowWidth  > 700 && windowWidth  <= 1200) {widthC = 30;}
    else if (windowWidth  > 1200 && windowWidth  <= 1900) {widthC = 40;}
    else if (windowWidth  > 1900) {widthC = 50;}
    else {widthC = 50;}
}



// aEff = document.getElementById('aEff');

// setInterval(writeaEff, 2);

// function writeaEff(){aEff.innerHTML = window.innerWidth ;}



function impressionUnitaire_cube(){
    xx = widthC*cubeX; yy = widthC*cubeY; zz = widthC*cubeZ;
    position = "translateX(" + xx + "px) translateY(" + yy 
    + "px) translateZ(" + zz + "px) ";
    
    i = 0; while (i < 6){nouveauCube(spirale);i++;}
}

function nouveauCube(){
    cube = document.createElement('div');    
    cube.innerHTML = nombre;
    (nombre < 100) ? cube.style.fontSize = "1em" : cube.style.fontSize = "0.5em";
    cube.classList.add("face");
    cube.style.width = widthC +"px";
    cube.style.height = widthC +"px";
    universP(); faceDeCube(); spirale.appendChild(cube);
}

// couleur du cube
function universP(){
    (isItPrime == 'Yes')? rouge() : noir();
}

function rouge(){cube.style.background = "rgb(226, 11, 11)";}
function noir(){
    // cube.style.background = 'black';
    switch(quatrain){
        case 0 :cube.style.background = "rgb(100, 100, 100)";break;
        case 1 :cube.style.background = "rgb(150, 100, 75)";break;
        case 2 :cube.style.background = "rgb(200, 100, 50)";break;
        case 3 :cube.style.background = "rgb(250, 100, 25)";break;
    }
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
