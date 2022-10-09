window.onload = function(){
    let tilesArr = document.querySelectorAll("#board div");
    boot();

    //////////////// Part 1  
        function boot(){
            console.log("boot");
            tilesArr.forEach(el => el.className = "square");
        }

    /////////Variables

    tilesArr = tilesArr.forEach(tile => tile.addEventListener("click", fillSquare));
    let player = "X";
    let gameState = ["","","",
                    "","","",
                    "","","",];
    /////////////// Part 2
    function fillSquare(event){
        const tile = event.target;
        console.log(tile);
        for (let i = 0; i<9; i++){ //make dependent on win
            if (player == "X")
            {
                tile.innerHTML = "X";
                tile.classList.add(".square.X");
                player = "O";
            }
            else{
                tile.innerHTML = "O";
                tile.classList.add(".square.O");
                player = "X";
            }
        }    
    }
}