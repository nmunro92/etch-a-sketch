const gameContainer = document.getElementById("gameContainer");


//build a grid of users size
function getSquares (){
    gameContainer.innerHTML = "";
    let n = parseInt(document.getElementById("squares").value);

    for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++){
            gameContainer.innerHTML+= '<div class="div2"> </div>';
            }
        
    }

    //make sure it's a grid
    gameContainer.style.display = "inline-grid";
    gameContainer.style.gridTemplateColumns =`repeat(${n}, auto)`;

    //add listens for when they're hovered over
    document.querySelectorAll(".div2").forEach(link => link.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = "black";
  }))
}

// button to clear the grid
function clearGrid (){
    let myArr = document.querySelectorAll(".div2")
    for (let i = 0; i < myArr.length; i++) {
        myArr[i].style.backgroundColor = "";
    }
}


