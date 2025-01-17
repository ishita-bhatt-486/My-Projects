let val=0;
let game;
//at the end of each loop turn the val into 1 or 0

//2D array- each tile=one element
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
    
            console.log(`Button clicked at Row: ${row}, Column: ${column}`);
            if (arr[r][c] !== "") {
                console.log("Tile already filled!");
                return;
            }
            else{
            arr[row][column]=val;
            }

            if (val===0){
                val=1;
            }
            else if(val===1){
                val=0;
            }
            // Update button text
        });
    });

    

    //add conditions to check if game win- use an array

//add player names- option
//disable the other one(x and o)- alternatively switch
//end game when game=win