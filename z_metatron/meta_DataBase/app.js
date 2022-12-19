// DOM
createTable = document.getElementById("createTable");
destroyTable = document.getElementById("destroyTable");
alimentationPremiereFoisTable = document.getElementById("alimentationPremiereFoisTable");
reponse = document.getElementById("reponse");



function createTableNature(){
    const xmlhttp_meta_sqlA = new XMLHttpRequest();
    xmlhttp_meta_sqlA.onload = function() {
        reponse.innerHTML = this.responseText;
    }
    xmlhttp_meta_sqlA.open("GET", "table_creer_nature.php", true);
    xmlhttp_meta_sqlA.send();
}

function destroyTableNature(){
    const xmlhttp_meta_sqlA = new XMLHttpRequest();
    xmlhttp_meta_sqlA.onload = function() {
        reponse.innerHTML = this.responseText;
    }
    xmlhttp_meta_sqlA.open("GET", "table_detruire_nature.php", true);
    xmlhttp_meta_sqlA.send();
}

function alimenterPremiereFoisTable(){
    const xmlhttp_meta_sqlA = new XMLHttpRequest();
    xmlhttp_meta_sqlA.onload = function() {
        reponse.innerHTML = this.responseText;
    }
    xmlhttp_meta_sqlA.open("GET", "table_alimentation_nature_premiere_fois.php", true);
    xmlhttp_meta_sqlA.send();
}

function alimenterEniemeFoisTable(){
    const xmlhttp_meta_sqlA = new XMLHttpRequest();
    xmlhttp_meta_sqlA.onload = function() {
        reponse.innerHTML = this.responseText;
    }
    xmlhttp_meta_sqlA.open("GET", "table_alimentation_nature_enieme_fois.php", true);
    xmlhttp_meta_sqlA.send();
}