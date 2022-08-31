function randomDice1(){
    let randomNumber1;
    let randomNumber2;
    randomNumber1 = (Math.round(Math.random()*5)+1);
    randomNumber2 = (Math.round(Math.random()*5)+1);
    document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`);
    document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`);

    if ( randomNumber1 === randomNumber2){
        document.querySelector("h1").innerHTML = "Draw!";
    } else if( randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "&#128681 Player 1 wins!";
    } else {
        document.querySelector("h1").innerHTML = "Player 2 wins! &#128681";
    }
}