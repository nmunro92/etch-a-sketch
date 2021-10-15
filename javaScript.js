const gameContainer = document.getElementById("gameContainer");

function getSquares (){
    let n = parseInt(document.getElementById("squares").value);
    // return n;
// }



// //create a grid with x squares
// function buildGrid (){
    for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++){
            gameContainer.innerHTML+= '<div class="div2"> </div>';
            }
        
    }

    document.querySelectorAll(".div2").forEach(link => link.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = "black";
  }))
}
//  buildGrid ();

//have the squares change colour when the mouse hovers over it


// button to clear the grid and get new size
function clearGrid (){
    let myArr = document.querySelectorAll(".div2")
    for (let i = 0; i < myArr.length; i++) {
        myArr[i].style.backgroundColor = "";
    }
}

//get grid size from player

