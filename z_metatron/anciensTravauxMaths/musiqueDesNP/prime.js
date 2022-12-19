let red = 0 ;
let green = 250 ;
let blue = 0;

var t = 200;
let bobo = 0;
var interval;
let nombre = 0; // variable initiale




const elt = document.getElementById('boutton');    
elt.addEventListener('click', f1());


//f1();
 
// Function that changes the timer
function changeTimer(){
    bobo = bobo + 1;
    t = 400 / Math.log(bobo);
}
 
// Function to run at irregular intervals
function f1() {
    effacer();

    incrementation();
    clearInterval(interval);
    changeTimer();
    interval = setInterval(f1, t);

    document.body.style.background = 'rgba(' + red + ',' + blue + ',' + green + ',0.3)';
    
    console.log(t + 'hhheeeehioiooo');
    console.log(bobo + 'ffff');
    
}

//setInterval(incrementation, 100);

function effacer() {
    document.getElementById('main').innerHTML = '';
    document.getElementById('main').classList.add("nonPrime");

    document.getElementById('cym1').style.background = 'blue';
    document.getElementById('cym2').style.background = 'blue';
    document.getElementById('cym3').style.background = 'blue';
    document.getElementById('cym4').style.background = 'blue';

    document.getElementById('tim1').style.background = 'blue';
    document.getElementById('tim2').style.background = 'blue';
    document.getElementById('tim3').style.background = 'blue';
    document.getElementById('tim4').style.background = 'blue';

}

function quandCestPrime() {
    document.getElementById('main').classList.replace('nonPrime', 'Prime');
    document.getElementById('main').innerHTML = nombre;
}

function quandCestSecond() {
    document.getElementById('main').classList.replace('Prime', 'nonPrime');
    document.getElementById('main').innerHTML = nombre;
}

function cym_1() {document.getElementById('cym1').style.background = 'red';}
function cym_2() {document.getElementById('cym2').style.background = 'red';}
function cym_3() {document.getElementById('cym3').style.background = 'red';}
function cym_4() {document.getElementById('cym4').style.background = 'red';}

function tim_1() {document.getElementById('tim1').style.background = 'red';}
function tim_2() {document.getElementById('tim2').style.background = 'red';}
function tim_3() {document.getElementById('tim3').style.background = 'red';}
function tim_4() {document.getElementById('tim4').style.background = 'red';}


function incrementation() {
    nombre = nombre + 1;
    console.log(nombre);
    console.log(nbrPremier(nombre));
    if (nbrPremier(nombre) === true){
        console.log('heho');
        if (nombre % 12 === 11) {note(2304); cym_4();}
        if (nombre % 12 === 7) {note(2332); cym_3();}
        if (nombre % 12 === 5) {note(2333); cym_2();}
        if (nombre % 12 === 1) {note(2341); cym_1();}

        if (nombre % 10 === 9) {note(2302); tim_4();}
        if (nombre % 10 === 7) {note(2319); tim_3();}
        if (nombre % 10 === 3) {note(2367); tim_2();}
        if (nombre % 10 === 1) {note(2328); tim_1();}


        if (nombre % 6 === 5) {red = red + 25; blue = blue - 25;};
        if (nombre % 6 === 1) {red = red - 25; blue = blue + 25;};

        quandCestPrime();
    }
    else {
        quandCestSecond();

    }
}



function note(son){
    var audio = new Audio('https://lasonotheque.org/UPLOAD/mp3/' + son + '.mp3');
    audio.play();
    audio.volume = 0.5;
}


function nbrPremier(nbr) {
    for(var i = 2; i < nbr; i++)
      if(nbr%i === 0) return false;
      return nbr > 1;
  }
  


  