//Tic-Tac-Toe

let val=0;
let game="running";
let winner="none";

const arr= [
    ["","",""],
    ["","",""],
    ["","",""]
];

const tiles = document.querySelectorAll(".tiles");

tiles.forEach(tiles => {
        tiles.addEventListener("click",handleTileClick); 
    });

function handleTileClick(event) {

    const row = event.target.getAttribute("data-row");
    const column = event.target.getAttribute("data-column");

    //(for debugging)
    console.log(`Button clicked at Row: ${row}, Column: ${column}`);
    
    if (arr[row][column] !== "") {
        console.log("Tile already filled!");   
    }

    else{
        arr[row][column]=val;
        checkWin();
        
        if (val===0){
            val=1;
            event.target.textContent = "X";
        }
        else if(val===1){
            val=0;
            event.target.textContent = "O";
        }

        if (checkWin()) {
            winner = val === 0 ? "O" : "X";
            game = "end";
            console.log(`Game Over! Winner: ${winner}`);
            disableListeners();
        } 
        else if (checkDraw()) {
            game = "end";
            console.log("Game Over! It's a draw!");
            disableListeners();
        }            
    }
};

function checkWin(){
    return(
        //horizontal
        (arr[0][0]===arr[0][1] && arr[0][0]===arr[0][2] && arr[0][0] !== "") ||
        (arr[1][0]===arr[1][1] && arr[1][0]===arr[1][2] && arr[1][0] !== "") ||
        (arr[2][0]===arr[2][1] && arr[2][0]===arr[2][2] && arr[2][0] !=="") ||

        // columns
        (arr[0][0]===arr[1][0] && arr[0][0]===arr[2][0] && arr[0][0] !=="") ||
        (arr[0][1]===arr[1][1] && arr[0][1]===arr[2][1] && arr[0][1] !=="") ||
        (arr[0][2]===arr[1][2] && arr[0][2]===arr[2][2] && arr[0][2] !== "") ||

        //diagonals
        (arr[0][0]===arr[1][1] && arr[0][0]===arr[2][2] && arr[0][0] !=="") ||
        (arr[0][2]===arr[1][1] && arr[0][2]===arr[2][0] && arr[0][2] !=="")
    );
        
}

function checkDraw() {
    return arr.flat().every(cell => cell !== "");
}

function disableListeners() {
    tiles.forEach(tile => {
        tile.removeEventListener("click", handleTileClick);
    });
}