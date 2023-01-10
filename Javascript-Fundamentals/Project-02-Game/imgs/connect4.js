// Board creation
// a connect 4 board size never changes so no user input needed

const body = document.querySelector("body");
const gameBoardCon = document.createElement("div");
gameBoardCon.setAttribute("id", "gameBoardCon");
body.append(gameBoardCon);
let gameBoardArr = [];

//Populate Array with arrays of objects
function populateBoard(){
  for(let x = 0; x < 7; x++){
    const row = [];
    for(let y = 0; y< 6; y++){
      const div = document.createElement("div");
      div.classList.add("empty");
      const space ={
        div,
        x,
        y,
      };
      row.push(space);
    };
    gameBoardArr.push(row);
  };
  gameBoardArr.forEach(row =>{
    row.forEach(space=>{
      gameBoardCon.append(space.div)
    });
  });
  return gameBoardArr;
}

//run function to visualise gameboard
populateBoard();
console.log(gameBoardArr)