function params_init_metatron(){
    phase = 1;          
    nombre = 0;
    cubeX = -1;         cubeY = 0;          cubeZ = 0; 
    numerateur = 0;     denumerateur = 0;
    distique = 1;       quatrain = 3;       sixain = 5;
    sixain_12 = true;
}

var forme = new Array();            forme = ['chevron','triplan'];
var eson =  new Array();             vent = ['E','S','O','N'];
var est =   new Array();              est = ['T','S','O','C','N','E'];
var sud =   new Array();              sud = ['C','O','N','T','E','S'];
var ouest = new Array();            ouest = ['T','N','E','C','S','O'];
var nord =  new Array();             nord = ['C','E','S','T','O','N'];

// changement de sixain dans triplan
function denumerateur_MAJ(){
    switch(sixain){
        case 0: if(denumerateur > 0)    {denumerateur--}    break;
        case 1: if(sixain_12 == false)  {denumerateur++}    break;
        case 2: if(sixain_12 == false)  {denumerateur--}
                sixain_12 = false;                          break;
        case 3: case 4: case 5:                             break;
    }
}

// up
function sixain_Up(){sixain++; if(sixain == 6) {sixain = 0}}

function phase_Up(){
    if(numerateur == 1 && denumerateur == 2){phase = phase + 1;}
}

// pièces
function chevron(){
    denumerateur = 2;
    quatrain++; if(quatrain == 4) {quatrain = 0;}
    distique = 0;
}
function triplan(){
    denumerateur = phase - 1;
    distique = 1;
    sixain_12 = true;
}

// direction vectorielle=========================================
function nouvellesCoordonnees(){
    direction();
    switch(sens){
        case 'E': cubeX++;      break;
        case 'S': cubeY++;      break;
        case 'C': cubeZ++;      break;
        case 'O': cubeX--;      break;
        case 'N': cubeY--;      break;
        case 'T': cubeZ--;      break;
    }
}
function direction(){
    sens = '';
    (distique == 0) ? sens = vent[quatrain] : sens = vecteur();
    return sens;
}
function vecteur(){
    switch(vent[quatrain]){
        case 'E': vect = est[sixain];      break;
        case 'S': vect = sud[sixain];      break;
        case 'O': vect = ouest[sixain];    break;
        case 'N': vect = nord[sixain];     break;
    }
    return vect;
}

function spirale3D_metatron(){
    if (numerateur == denumerateur){
        numerateur = 0;
        sixain_Up();
        if (forme[distique] == 'chevron'){triplan()}
        if (forme[distique] == 'triplan'){denumerateur_MAJ()}
    }
    if (denumerateur == 0){chevron()}
    if (forme[distique] == 'chevron'){phase_Up()}
    nouvellesCoordonnees();
    
    numerateur++; nombre++; 
}