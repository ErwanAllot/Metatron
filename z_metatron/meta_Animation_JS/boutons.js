// ROTATION SUR AXE ===============================================================
// lié à camera.js
function net_A(){
    net();
    deg_X = 250; deg_Y = -180; deg_Z = -130;
    rotation();
}
function sec_A(){
    sec(); 
    deg_X = 130; deg_Y = 0; deg_Z = -40;
    rotation();
}
function sot_A(){
    sot();
    deg_X = 60; deg_Y = 0; deg_Z = -140;
    rotation();
}
function noc_A(){
    noc();
    deg_X = 130; deg_Y = 0; deg_Z = -230;
    rotation();
}
function xMin(){deg_X = (deg_X - 10)%360;rotation(); rotation_data_DOM();}
function xMax(){deg_X = (deg_X + 10)%360;rotation(); rotation_data_DOM();}
function yMin(){deg_Y = (deg_Y - 10)%360;rotation(); rotation_data_DOM();}
function yMax(){deg_Y = (deg_Y + 10)%360;rotation(); rotation_data_DOM();}
function zMin(){deg_Z = (deg_Z - 10)%360;rotation(); rotation_data_DOM();}
function zMax(){deg_Z = (deg_Z + 10)%360;rotation(); rotation_data_DOM();}

document.addEventListener("keydown", function(event) {
    switch(event.key){
      case "a" : case "A": deg_X = (deg_X + 10)%360; break;
      case "z" : case "Z": deg_X = (deg_X - 10)%360; break;
      case "e" : case "E": deg_Y = (deg_Y + 10)%360; break;
      case "r" : case "R": deg_Y = (deg_Y - 10)%360; break;
      case "t" : case "T": deg_Z = (deg_Z + 10)%360; break;
      case "y" : case "Y": deg_Z = (deg_Z - 10)%360; break;
    }
    rotation(); //rotation_data_DOM();
});
// ROTATION SUR AXE ===============================================================


// VITESSE ===============================================================

function dom_freq(){frequence.innerHTML = frequenceV;}
function freq2(){frequenceV = 2; dom_freq();}
function freq20(){frequenceV = 20; dom_freq();}
function freq200(){frequenceV = 200; dom_freq();}
function freq500(){frequenceV = 500; dom_freq();}
function freq1000(){frequenceV = 1000; dom_freq();}
function freq2000(){frequenceV = 2000; dom_freq();}    

// VITESSE ===============================================================



// TAILLE CUBE ===============================================================
function agrandir(){
    widthC = widthC + 5;
    widthCube.innerHTML = widthC;
}
function retrecir(){
    if (widthC > 20){widthC = widthC - 5;}
    widthCube.innerHTML = widthC;
}
// TAILLE CUBE ===============================================================

// INSCRIPTION NOMBRE SUR LE CUBE ======================================
inscriptionV = true;
function montrer(){
    inscriptionV = true;
    inscription.innerHTML = "nombre affiché";
}
function effacer(){
    inscriptionV = false;
    inscription.innerHTML = "nombre non affiché";
}
// INSCRIPTION NOMBRE SUR LE CUBE ======================================


// TOUS LES NOMBRES OU JUSTE NP ======================================
function tousLesNombres(){
    impressionDeTousLesNombres = 1;
    naturelOuPremier.innerHTML = "tous les nombres";
}
function queLesNombresPremiers(){
    impressionDeTousLesNombres = 0;
    naturelOuPremier.innerHTML = "que les nombres premiers";
}
function lePlanXEgal3(){
    impressionDeTousLesNombres = 3;
    naturelOuPremier.innerHTML = "le plan x = 3";
}
function lesNombresPairs(){
    impressionDeTousLesNombres = 2;
    naturelOuPremier.innerHTML = "les nombres pairs";
}

// TOUS LES NOMBRES OU JUSTE NP ======================================


