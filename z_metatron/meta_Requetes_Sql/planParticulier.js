function planUnique(){
    quelleConstante = 'x';
    quelleConstanteChecked();
    abc = Math.round(document.getElementById('Number').value);
    quelleRequeteSql();
}

function quelleConstanteChecked(){
    if (document.querySelector('#myradio_1').checked == true){
        quelleConstante = 'x';
    }
    else if (document.querySelector('#myradio_2').checked == true){
        quelleConstante = 'y';
    }
    else {quelleConstante = 'z';}
}

function quelleRequeteSql(){
    valeurDeLaConst.innerHTML = abc;
    switch(quelleConstante){
        case 'x' : 
            xyz.innerHTML = "x = ";
            read_sql__constanteX(); 
        break;
        case 'y' : 
            xyz.innerHTML = "y = ";
            read_sql__constanteY();
        break;
        case 'z' :
            xyz.innerHTML = "z = ";
            read_sql__constanteZ();
        break;
    }
}


