abc = 0;
widthC = 3.3;
coeff = 2.4;

function recupererLesCoordonnees(){
    plop = toto.split(',');
    c = 0;
    for (y = 0; y < plop.length - 1; y = y + 2){
        c = y + 1;
        xxx = coeff * plop[y];
        yyy = coeff * plop[c];
        dessinerLeCercle(xxx, yyy);
    }
}

function dessinerLeCercle(xxx, yyy){
    cercle = document.createElement('div');    
    cercle.classList.add("faceD");
    cercle.style.width = widthC +"px";
    cercle.style.height = widthC +"px";
    cercle.style.background = 'green';

    plan.appendChild(cercle);
    cercle.style.transform = "translateX(" + xxx + "px) translateY(" + yyy + "px)";
}

function reninitialisation_dom_metatron_SQL(){
    plan.remove();                
    plan = document.createElement("div");
    plan.setAttribute("id", "plan");
    onMontreMetatron.appendChild(plan);
}

