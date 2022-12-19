function moteur_constanteZplus100(){
    MAJ_DOM_constanteZ();
    constZplus100.style.background = 'red';
    reninitialisation_dom_metatron_SQL();
    var defilement = setInterval(
        function createSpi(){
            valeurDeLaConst.innerHTML = abc;
            reninitialisation_dom_metatron_SQL();
            read_sql__constanteZ();
            abc = abc + 1;
            if(abc == 100){
                clearInterval(defilement);
                abc = 0;
                moteur_constanteZplus100();
            }
        }
    , 5000);
}

function moteur_constanteZmoins100(){
    MAJ_DOM_constanteZ();
    constZmoins100.style.background = 'red';
    reninitialisation_dom_metatron_SQL();
    var defilement = setInterval(
        function createSpi(){
            valeurDeLaConst.innerHTML = abc;
            reninitialisation_dom_metatron_SQL();
            read_sql__constanteZ();
            abc = abc - 1;
            if(abc == -100){
                clearInterval(defilement);
                abc = 0;
                moteur_constanteZmoins100();
            }
        }
    , 5000);
}

// constante X ==========================================
function MAJ_DOM_constanteZ(){
    xyz.innerHTML = "z = ";
    ouest.innerHTML = "-x";
    nord.innerHTML = "+y";
    est.innerHTML = "+x";
    sud.innerHTML = "-y";
}

function read_sql__constanteZ() {
    reninitialisation_dom_metatron_SQL();
    MAJ_DOM_constanteZ();
    const xmlhttp_meta_sqlA = new XMLHttpRequest();
    xmlhttp_meta_sqlA.onload = function() {
        toto = this.responseText;
        recupererLesCoordonnees();
    }
    xmlhttp_meta_sqlA.open("GET", "constanteZ.php?ABC=" + abc, true);
    xmlhttp_meta_sqlA.send();
}
// constante X ==========================================