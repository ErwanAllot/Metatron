<?php

$forme =    ['chevron','triplan'];
$vent =     ['E','S','O','N'];
$est =      ['T','S','O','C','N','E'];
$sud =      ['C','O','N','T','E','S'];
$ouest =    ['T','N','E','C','S','O'];
$nord =     ['C','E','S','T','O','N'];

// changement de $sixain dans triplan
function denumerateur_MAJ(  ){
    global $sixain;
    global $denumerateur;
    global $sixainDouze;
    switch($sixain){
        case 0: if($denumerateur > 0)  {$denumerateur--;}   break;
        case 1: if($sixainDouze == 0)  {$denumerateur++;}   break;
        case 2: if($sixainDouze == 0)  {$denumerateur--;}
                $sixainDouze = 0;                           break;
        case 3: case 4: case 5:                             break;
    }
}

// up
function sixain_Up(){
    global $sixain;
    $sixain++; if($sixain == 6) {$sixain = 0;}
}

function phase_Up(){
    global $numerateur;
    global $denumerateur;
    global $phase;
    if($numerateur == 1 && $denumerateur == 2){$phase = $phase + 1;}
}

// pièces
function chevron(){
    global $denumerateur;
    global $quatrain;
    global $distique;
    $denumerateur = 2;
    $quatrain++; if($quatrain == 4) {$quatrain = 0;}
    $distique = 0;
}
function triplan(){
    global $denumerateur;
    global $phase;
    global $distique;
    global $sixainDouze;
    $denumerateur = $phase - 1;
    $distique = 1;
    $sixainDouze = 1;
}

// direction vectorielle=========================================
function nouvellesCoordonnees(){
    global $distique;
    global $vent;
    global $quatrain;
    global $est;
    global $sud;
    global $ouest;
    global $nord;
    global $sixain;
    global $sens;
    global $cubeX;
    global $cubeY;
    global $cubeZ;
    direction();
    switch($sens){
        case 'E': $cubeX++;      break;
        case 'S': $cubeY++;      break;
        case 'C': $cubeZ++;      break;
        case 'O': $cubeX--;      break;
        case 'N': $cubeY--;      break;
        case 'T': $cubeZ--;      break;
    }
}
function direction(){
    global $distique;
    global $vent;
    global $quatrain;
    global $est;
    global $sud;
    global $ouest;
    global $nord;
    global $sixain;
    global $sens;
    ($distique == 0) ? $sens = $vent[$quatrain] : $sens = vecteur($vent,$quatrain,$est,$sud,$ouest,$nord,$sixain);
    return $sens;
}
function vecteur(){
    global $vent;
    global $quatrain;
    global $est;
    global $sud;
    global $ouest;
    global $nord;
    global $sixain;
    switch($vent[$quatrain]){
        case 'E': $vect = $est[$sixain];      break;
        case 'S': $vect = $sud[$sixain];      break;
        case 'O': $vect = $ouest[$sixain];    break;
        case 'N': $vect = $nord[$sixain];     break;
    }
    return $vect;
}

function spirale3D_data_DOM(){
    global $phase;
    global $nombre;
    global $cubeX;
    global $cubeY;
    global $cubeZ;
    global $numerateur;
    global $denumerateur;
    global $distique;
    global $quatrain;
    global $sixain;
    global $forme;
    global $vent;
    global $est;
    global $sud;
    global $ouest;
    global $nord;
    global $sens;

    $grand_Espace = '&nbsp;&nbsp;&nbsp;&nbsp;';
    $petit_Espace = '&nbsp;&nbsp;';

    $calcul = 
    'phase : ' . $phase . $grand_Espace .

    '| distique : ' . $distique . $petit_Espace .
    'forme : ' . $forme[$distique] . $grand_Espace .

    '| quatrain : ' . $quatrain . $petit_Espace .
    'vent : ' . $vent[$quatrain] . $grand_Espace .

    '| sixain : ' . $sixain . $petit_Espace .
    'vecteur : ' . vecteur() . $grand_Espace .

    '| numerateur : ' . $numerateur . $petit_Espace .
    'denumerateur : ' . $denumerateur . $petit_Espace .

    '| <strong> nombre : ' . $nombre . $grand_Espace .
    
    'direction : ' . $sens . $grand_Espace .

    '</strong>| X : ' . $cubeX . $petit_Espace .
    'Y : ' . $cubeY . $petit_Espace .
    'Z : ' . $cubeZ . $grand_Espace .

    '</br>';

    echo $calcul;
}

function spirale3D(){
    global $phase;          
    global $nombre;
    global $cubeX;
    global $cubeY;
    global $cubeZ; 
    global $numerateur;
    global $denumerateur;
    global $distique;
    global $quatrain;
    global $sixain;
    global $forme;
    global $vent;
    global $est;
    global $sud;
    global $ouest;
    global $nord;
    global $sixainDouze;
    global $sens;

    if ($numerateur == $denumerateur){
        $numerateur = 0;
        sixain_Up();
        if ($forme[$distique] == 'chevron'){triplan();}
        if ($forme[$distique] == 'triplan'){denumerateur_MAJ();}
    }
    if ($denumerateur == 0){chevron();}
    if ($forme[$distique] == 'chevron'){phase_Up();}
    nouvellesCoordonnees();
    $numerateur++; $nombre++; 
    // spirale3D_data_DOM();
}

?>