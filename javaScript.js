const gameContainer = document.getElementById("gameContainer");
const large = document.getElementById("large");
const medium = document.getElementById("medium");
const small = document.getElementById("small");

function onLoad () {
    clearGrid ();
    gameContainer.innerHTML = "";

    for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 20; j++){
            gameContainer.innerHTML+= '<div class="div2"> </div>';
            }
        
    }

    //make sure it's a grid
    gameContainer.style.display = "inline-grid";
    gameContainer.style.gridTemplateColumns ='repeat(20, auto)';

    medium.classList.add("pushed");
    small.classList.remove("pushed");
    large.classList.remove("pushed");


    //add listens for when they're hovered over
    document.querySelectorAll(".div2").forEach(link => link.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = "black";
  }))
}

onLoad ();
blackSquares ();x


//build a grid of users size
function smallGrid (){
    clearGrid ();
    gameContainer.innerHTML = "";
    for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++){
            gameContainer.innerHTML+= '<div class="div2"> </div>';
            }
    }
        
    

    //make sure it's a grid
    gameContainer.style.display = "inline-grid";
    gameContainer.style.gridTemplateColumns ="repeat(10, auto)";

    small.classList.add("pushed");
    medium.classList.remove("pushed");
    large.classList.remove("pushed");

    //add listens for when they're hovered over
    document.querySelectorAll(".div2").forEach(link => link.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = "black";
  }))
}


function largeGrid (){
    clearGrid ();
    gameContainer.innerHTML = "";

    for (let i = 0; i < 30; i++) {
            for (let j = 0; j < 30; j++){
            gameContainer.innerHTML+= '<div class="div2"> </div>';
            }
        }
        
    

    //make sure it's a grid
    gameContainer.style.display = "inline-grid";
    gameContainer.style.gridTemplateColumns ="repeat(30, auto)";

    large.classList.add("pushed");
    small.classList.remove("pushed");
    medium.classList.remove("pushed");

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

function blackSquares () {
    document.querySelectorAll(".div2").forEach(link => link.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = "black";
}))
    document.getElementById("black").style.backgroundColor = "black";
    document.getElementById("black").style.color = "white";
    document.getElementById("rainbows").style.backgroundColor = "";
}

function rainbow () {
    document.querySelectorAll(".div2").forEach(link => link.addEventListener('mouseover', (event) => {
        let color = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)
        event.target.style.backgroundColor = `${color}`
}))
    let buttonColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)
    document.getElementById("rainbows").style.backgroundColor = `${buttonColor}`;
    document.getElementById("black").style.backgroundColor = "";
    document.getElementById("black").style.color = "black";
}


    


