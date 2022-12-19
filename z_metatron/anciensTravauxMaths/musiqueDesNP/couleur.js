setInterval(back, 100);
function back() {
    let milliseconds = +new Date();
    mil_R = Math.floor (milliseconds / 100) ;
    mil_B = Math.floor (milliseconds / 1000) ;
    mil_G = Math.floor (milliseconds / 10000) ;
    let red = mil_R % 250 ;
    let blue = mil_B % 250 ;
    let green = mil_G % 250 ;
    //document.body.style.background = 'rgb(red,blue,green)';
   // document.body.style.background = 'rgba(1,1,1,0.3)';
    document.body.style.background = 
    'rgba(' + red + ',' + blue + ',' + green + '0.3)';
  //  console.log(milliseconds);
  //  console.log(red);
  //  console.log(blue);
  //  console.log(green);
}