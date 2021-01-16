let boardSize = 40;
const drawChar = "🐍"
const drawBlank = "  "

const drawBoard = (size) => {
console.log(drawChar.repeat(boardSize));
for(i = 0; i < size - 2; i++) console.log(drawChar + drawBlank.repeat(size-2) + drawChar)
console.log(drawChar.repeat(boardSize));
}

drawBoard(boardSize);

