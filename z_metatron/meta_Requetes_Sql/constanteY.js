function moteur_constanteYplus100(){
    MAJ_DOM_constanteY();
    constYplus100.style.background = 'red';
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
                moteur_constanteYplus100();
            }
        }
    , 5000);
}

function moteur_constanteYmoins100(){
    MAJ_DOM_constanteY();
    constYmoins100.style.background = 'red';
    reninitialisation_dom_metatron_SQL();
    var defilement = setInterval(
        function createSpi(){
            valeurDeLaConst.innerHTML = abc;
            reninitialisation_dom_metatron_SQL();
            read_sql__constanteY();
            abc = abc - 1;
            if(abc == -100){
                clearInterval(defilement);
                abc = 0;
                moteur_constanteYmoins100();
            }
        }
    , 5000);
}

// constante X ==========================================
function MAJ_DOM_constanteY(){
    xyz.innerHTML = "y = ";
    ouest.innerHTML = "-x";
    nord.innerHTML = "+z";
    est.innerHTML = "+x";
    sud.innerHTML = "-z";
}
function read_sql__constanteY() {
    reninitialisation_dom_metatron_SQL();
    MAJ_DOM_constanteY();
    const xmlhttp_meta_sqlA = new XMLHttpRequest();
    xmlhttp_meta_sqlA.onload = function() {
        toto = this.responseText;
        recupererLesCoordonnees();
    }
    xmlhttp_meta_sqlA.open("GET", "constanteY.php?ABC=" + abc, true);
    xmlhttp_meta_sqlA.send();
}
// constante X ==========================================