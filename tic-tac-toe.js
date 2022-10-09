window.onload = function(){
    let tilesArr = document.querySelectorAll("#board div");
    boot();

    //////////////// Part 1  
        function boot(){
            console.log("boot");
            tilesArr.forEach(el => el.className = "square");
        }

    /////////Variables

    
    let player = "X";
    let gameState = ["","","",
                    "","","",
                    "","","",];

    /////////////// Part 2
    tilesArr.forEach(tile => tile.addEventListener("click", fillSquare));
    function fillSquare(event){
        
        var tile = event.target;
        console.log(tile); //make dependent on win
        if (player == "X"){
            tile.innerHTML = "X";
            tile.classList.add("X");
            player = "O";
        }
        else{
            tile.innerHTML = "O";
            tile.classList.add("O");
            player = "X";
        }    
    }

    /////////////// Part 3
    tilesArr.forEach(tile => tile.addEventListener("mouseover", hover));
    tilesArr.forEach(tile => tile.addEventListener("mouseout", endHover));
    
    function hover(event){
        event.target.classList.add("hover");
    }

    function endHover(event){
        event.target.classList.remove("hover");
    }
}