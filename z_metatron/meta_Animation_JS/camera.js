deg_X = 0; deg_Y = 0; deg_Z = 0;
esonCamera = 3;

function rotation(){
    repere.style.transform = "rotateX(" + deg_X + "deg) rotateY(" + deg_Y + "deg) rotateZ(" + deg_Z + "deg)";
    spirale.style.transform = "rotateX(" + deg_X + "deg) rotateY(" + deg_Y + "deg) rotateZ(" + deg_Z + "deg)";
}

function net(){
    spirale.style.animation = "mymove_NET_SEC 1s";
    repere.style.animation = "mymove_NET_SEC 1s";
}
function sec(){
    spirale.style.animation = "mymove_SEC_SOT 1s";
    repere.style.animation = "mymove_SEC_SOT 1s";
}
function sot(){
    spirale.style.animation = "mymove_SOT_NOC 1s";
    repere.style.animation = "mymove_SOT_NOC 1s";
}
function noc(){
    spirale.style.animation = "mymove_NOC_NET 1s";
    repere.style.animation = "mymove_NOC_NET 1s";
}

function camera(){
    switch(esonCamera){
        case 0 : net(); deg_X = 250; deg_Y = -180; deg_Z = -130; break;
        case 1 : sec(); deg_X = 130; deg_Y = 0; deg_Z = -40; break;
        case 2 : sot(); deg_X = 60; deg_Y = 0; deg_Z = -140; break;
        case 3 : noc(); deg_X = 130; deg_Y = 0; deg_Z = -230; break;
    }
    rotation();
}

function racineCubique(){
    if (Math.cbrt(nombre) % 1 === 0){
            esonCamera++; esonCamera = esonCamera % 4; camera();
    }
}