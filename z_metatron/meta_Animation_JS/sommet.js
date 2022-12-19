

function sommetPlus(){
    phase = document.getElementById('debutPhase').textContent;
    phase = Number(phase);
    phase = phase + 1;
    prepaSom();
    debutPhase.innerHTML = phase;
}

function sommetMoins(){
    phase = document.getElementById('debutPhase').textContent;
    phase = Number(phase);
    if (phase > 0){phase = phase - 1;}
    //phase = phase - 1;
    prepaSom();
    debutPhase.innerHTML = phase;
}

function prepaSom(){

    mod4_phase = phase % 4;
    quo4_phase = (phase - mod4_phase) / 4;
    nombre = phase*phase*phase;

    numerateur = 1;     denumerateur = 2;
    distique = 0;       quatrain = 0;       sixain = 0;

    switch(mod4_phase){
        case 1 :
            cubeX = 0 + 2 * quo4_phase;
            cubeY = 0 - 2 * quo4_phase;          
            cubeZ = 0 - 2 * quo4_phase;
            net(); deg_X = 250; deg_Y = -180; deg_Z = -130;
            rotation();
        break;
        case 2 :
            cubeX = 1 + 2 * quo4_phase;
            cubeY = 1 + 2 * quo4_phase;          
            cubeZ = 1 + 2 * quo4_phase;
            sec(); deg_X = 130; deg_Y = 0; deg_Z = -40;
            rotation();
        break;
        case 3 :
            cubeX = -1 - 2 * quo4_phase;
            cubeY = 2 + 2 * quo4_phase;          
            cubeZ = -1 - 2 * quo4_phase;
            sot(); deg_X = 60; deg_Y = 0; deg_Z = -140;
            rotation();
        break;
        case 0 :
            cubeX = -2 - 2 * quo4_phase;
            cubeY = -1 - 2 * quo4_phase;          
            cubeZ = 2 + 2 * quo4_phase;
            noc(); deg_X = 130; deg_Y = 0; deg_Z = -230;
            rotation();
        break;

    }
}





