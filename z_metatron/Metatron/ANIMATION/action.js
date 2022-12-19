maximum = 0;

moteur_action();
function moteur_action(){
    dom_getEltById(); reninitialisation_params();
    var defilement = setInterval(
        function createSpi(){
            read44();
            if(maximum == 2064){
                clearInterval(defilement);
                maximum = 0; 
                reninitialisation_dom_metatron();
                reninitialisation_params();
                moteur_action();
            }
        }
    , 200);
}

function dom_getEltById(){
    spirale = document.getElementById("spirale");
    graph = document.getElementById('graph');
}

function reninitialisation_params(){
    params_init_camera();
}

function read44() {
    nombre = plopPilopop[maximum];
    cubeX = plopPilopop[maximum+1];
    cubeY = plopPilopop[maximum+2];
    cubeZ = plopPilopop[maximum+3];
    quatrain = plopPilopop[maximum+4];
    isItPrime = plopPilopop[maximum+5];
    (isItPrime == 0) ? isItPrime = "No" : isItPrime = "Yes";
    impressionUnitaire_cube(); 
    nouvelAngle_camera();
    maximum = maximum+6;
}

function reninitialisation_dom_metatron(){
    spirale.remove();                
    spirale = document.createElement("div");
    spirale.setAttribute("id", "spirale");
    spirale.classList.add("cube");
    graph.appendChild(spirale);
}
