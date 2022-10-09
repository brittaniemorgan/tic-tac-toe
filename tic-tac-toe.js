window.onload = function(){
    let tilesNode = document.querySelectorAll("#board div");
    let tilesList = new Array(9);
    let winner = undefined;
    /////////Variables
    
        let player = "X";
        let gameState = ["","","",
                        "","","",
                        "","","",];
    

    boot();

    //////////////// Part 1  
        function boot(){
            console.log("boot");
            tilesNode.forEach(el => el.className = "square");
            tilesNode.forEach(tile => tile.addEventListener("click", fillSquare));
            tilesNode.forEach(tile => tile.addEventListener("mouseover", hover));
            tilesNode.forEach(tile => tile.addEventListener("mouseout", endHover));
            for (let i = 0; i<9;i++){
                tilesList[i] = tilesNode[i];
            } 
        }


    /////////////// Part 2
    
    function fillSquare(event){
        var tile = event.target;
        let index = tilesList.indexOf(tile);
        if (tile.innerHTML == ""){
            if (player == "X"){
                tile.innerHTML = player;
                tile.classList.add("X");
                gameState[index] = player
                player = "O";
            }
            else{
                tile.innerHTML = player;
                tile.classList.add("O");
                gameState[index] = player
                player = "X";
            }  
            checkWinner();
        }
    }

    /////////////// Part 3

    function hover(event){
        event.target.classList.add("hover");
    }

    function endHover(event){
        event.target.classList.remove("hover");
    }



    /////////////// Part 4

    function isXWinner(){
        if ((gameState[0] == "X" && gameState[1] == "X" && gameState[2] == "X")
                ||(gameState[3] == "X" && gameState[4] == "X" && gameState[5] == "X")
                ||(gameState[6] == "X" && gameState[7] == "X" && gameState[8] == "X" ))  {
                    document.querySelector("#status").classList.add("you-won");
                    document.querySelector("#status").innerHTML = "Congratulations! X is the Winner!";
                }      
    }

    function isOWinner(){
        if ((gameState[0] == "O" && gameState[1] == "O" && gameState[2] == "O")
                ||(gameState[3] == "O" && gameState[4] == "O" && gameState[5] == "O")
                ||(gameState[6] == "O" && gameState[7] == "O" && gameState[8] == "O"))       
                {
                    document.querySelector("#status").classList.add("you-won");
                    document.querySelector("#status").innerHTML = "Congratulations! O is the Winner!";
                } 
    }

    function checkWinner(){
        isXWinner();
        isOWinner();
    }

    /////////////// Part 5
    document.querySelector("button").addEventListener("click", clearBoard);

    function clearBoard(){
        tilesList.forEach(e => e.innerHTML = "");
    }

}
