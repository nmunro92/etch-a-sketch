const gameContainer = document.getElementById("gameContainer");


function game (){
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++){
            gameContainer.innerHTML+= '<div id="div2"> </div>';

        }
    }
}

game ();