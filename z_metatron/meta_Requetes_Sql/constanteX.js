function moteur_constanteXplus100(){
    MAJ_DOM_constanteX();
    constXplus100.style.background = 'red';
    reninitialisation_dom_metatron_SQL();
    var defilement = setInterval(
        function createSpi(){
            valeurDeLaConst.innerHTML = abc;
            reninitialisation_dom_metatron_SQL();
            read_sql__constanteX();
            abc = abc + 1;
            if(abc == 100){
                clearInterval(defilement);
                abc = 0;
                moteur_constanteXplus100();
            }
        }
    , 5000);
}

function moteur_constanteXmoins100(){
    MAJ_DOM_constanteX();
    constXmoins100.style.background = 'red';
    reninitialisation_dom_metatron_SQL();
    var defilement = setInterval(
        function createSpi(){
            valeurDeLaConst.innerHTML = abc;
            reninitialisation_dom_metatron_SQL();
            read_sql__constanteX();
            abc = abc - 1;
            if(abc == -100){
                clearInterval(defilement);
                abc = 0;
                moteur_constanteXmoins100();
            }
        }
    , 5000);
}

// constante X ==========================================
function MAJ_DOM_constanteX(){
    xyz.innerHTML = "x = ";
    ouest.innerHTML = "-y";
    nord.innerHTML = "+z";
    est.innerHTML = "+y";
    sud.innerHTML = "-z";
}
function read_sql__constanteX() {
    reninitialisation_dom_metatron_SQL();
    MAJ_DOM_constanteX();
    const xmlhttp_meta_sqlA = new XMLHttpRequest();
    xmlhttp_meta_sqlA.onload = function() {
        toto = this.responseText;
        recupererLesCoordonnees();
    }
    xmlhttp_meta_sqlA.open("GET", "constanteX.php?ABC=" + abc, true);
    xmlhttp_meta_sqlA.send();
}
// constante X ==========================================