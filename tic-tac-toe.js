window.onload = function(){

    /////////Variables
    let tilesNode = document.querySelectorAll("#board div");
    let tilesList = new Array(9);
    let player = "X";
    let gameState = ["","","",
                        "","","",
                        "","","",];
    

    boot();

    //////////////// Layout the Board
        function boot(){
            console.log("boot");
            for (let i = 0; i<9;i++){
                tilesList[i] = tilesNode[i];
            } 
            tilesList.forEach(tile => tile.className = "square");
            tilesList.forEach(tile => tile.addEventListener("click", fillSquare));
            tilesList.forEach(tile => tile.addEventListener("mouseover", hover));
            tilesList.forEach(tile => tile.addEventListener("mouseout", endHover));
            document.querySelector("button").addEventListener("click", clearBoard);   
        }


    /////////////// Game Play
    
    function fillSquare(event){
        var tile = event.target;
        let index = tilesList.indexOf(tile);

        if (tile.innerHTML == ""){
            if (player == "X"){
                tile.innerHTML = player;
                tile.classList.add("X");
                gameState[index] = player;
                player = "O";
            }

            else{
                tile.innerHTML = player;
                tile.classList.add("O");
                gameState[index] = player;
                player = "X";
            }  
            checkWinner();
        }
    }

    /////////////// Tile Animation

    function hover(event){
        event.target.classList.add("hover");
    }

    function endHover(event){
        event.target.classList.remove("hover");
    }



    /////////////// Check for Winner

    function isXWinner(){
        if ((gameState[0] == "X" && gameState[1] == "X" && gameState[2] == "X")
                ||(gameState[3] == "X" && gameState[4] == "X" && gameState[5] == "X")
                ||(gameState[6] == "X" && gameState[7] == "X" && gameState[8] == "X" ))  {
                    document.querySelector("#status").classList.add("you-won");
                    document.querySelector("#status").innerHTML = "Congratulations! X is the Winner!";
                    tilesList.forEach(el => el.removeEventListener("click", fillSquare));
                    
                }      
    }

    function isOWinner(){
        if ((gameState[0] == "O" && gameState[1] == "O" && gameState[2] == "O")
                ||(gameState[3] == "O" && gameState[4] == "O" && gameState[5] == "O")
                ||(gameState[6] == "O" && gameState[7] == "O" && gameState[8] == "O"))       
                {
                    document.querySelector("#status").classList.add("you-won");
                    document.querySelector("#status").innerHTML = "Congratulations! O is the Winner!";
                    tilesList.forEach(el => el.removeEventListener("click", fillSquare));
                } 
    }

    function checkWinner(){
        isXWinner();
        isOWinner();
    }

    /////////////// Restart Game

    function clearBoard(){
        tilesList.forEach(el => el.addEventListener("click", fillSquare));
        gameState =  ["","","",
                    "","","",
                    "","","",];
        player = "X";
        tilesList.forEach(tile => tile.innerHTML = "");
        tilesList.forEach(tile => tile.className = "square");
        document.querySelector("#status").classList.remove("you-won");
        document.querySelector("#status").innerHTML = "Move your mouse over a square and click to play an X or an O.";
    }
}
