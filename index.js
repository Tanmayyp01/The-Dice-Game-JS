
// FOR PLAYER 1 //

// Making Random Numbes for dice :
let Rnumber1 = Math.floor(Math.random() * 6) + 1 ;

// Auto-Image Selection :
let Rimage1 = Rnumber1 + ".png";

let ImageS = "images/" + Rimage1;


// Set Attributes to image :
let imgSel = document.querySelectorAll("img")[0];

imgSel.setAttribute("src" , ImageS);

// FOR PLAYER 2 //

let Rnumber2 = Math.floor(Math.random() * 6) + 1;

let Rimage2 = Rnumber2 + ".png" ;

let ImageS2 = "images/" + Rimage2 ;

let imgSe2 = document.querySelectorAll("img")[1];

imgSe2.setAttribute("src" , ImageS2);


//Checking Winner :

if(Rnumber1 > Rnumber2){
 document.querySelector('h1').innerHTML = "Player 1 is the Winner...&#128516;"
}
else if(Rnumber1 <  Rnumber2){
    document.querySelector('h1').innerHTML = "Player 2 is the Winner...&#128516;"
}
else{
    document.querySelector('h1').innerHTML = "Game Draw....."
}