const gameContainer = document.getElementById("gameContainer");

//create a grid with x squares
function game (){
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++){
            gameContainer.innerHTML+= '<div class="div2"> </div>';

        }
    }
  
    
}
game ();

//have the squares change colour when the mouse hovers over it
document.querySelectorAll(".div2").forEach(link => link.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = "black";
  }))

// button to clear the grid
function clearGrid (){
    let myArr = document.querySelectorAll(".div2")
    for (let i = 0; i < myArr.length; i++) {
        myArr[i].style.backgroundColor = "";
    }
}

