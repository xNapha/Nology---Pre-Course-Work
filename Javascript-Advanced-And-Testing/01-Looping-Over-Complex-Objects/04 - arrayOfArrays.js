// Matrix - Multi Dimensional Arry
// Table - Grid - Co Ordinates - Graphs
// Rows - x
// columns - y

const table = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for(let row = 0; row < table.length; row++){
  // console.log(table[row]);
  for(let column = 0; column < table.length; column++){
    // console.log(table[column][row]);
  };
};

const grid = [
  ["x","o","x"],
  ["x","o","x"],
  ["o","x","x"],
]

for(let row = 0; row < grid.length; row++){
  const rowStr = grid[row].join("");
  let columnStr = "";
  for(let column = 0; column < grid.length; column++){
    columnStr += grid[column][row];
  };
  console.log(row, rowStr, columnStr)
  if(rowStr ==="xxx"||columnStr === "xxx"){
    console.log("x wins")
    break;
  } else if(rowStr === "ooo" || columnStr ==="ooo"){
    console.log("o wins")
    break;
  };
};