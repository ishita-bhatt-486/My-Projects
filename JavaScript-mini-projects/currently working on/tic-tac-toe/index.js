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
        tiles.addEventListener("click", (event) => {
          
            const row = event.target.getAttribute("data-row");
            const column = event.target.getAttribute("data-column");
    
    //updating button text
        
    const updateText = document.querySelector(`[data-row="${row}"][data-column="${column}"]`);
            console.log(`Button clicked at Row: ${row}, Column: ${column}`);
            if (arr[row][column] !== "") {
                console.log("Tile already filled!");
                
            }
            else{
                arr[row][column]=val;
                if (val===0){
                    val=1;
                    updateText.textContent = "X";

                }
                else if(val===1){
                    val=0;
                    updateText.textContent = "O";
                }
            }
            console.log(game);
//winning conditions
           if (
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

           ){
            winner=val;
            game="end";
            
           }
            });

    });