let boardSize = 10;
const drawChar = "🐍"
const drawBlank = "  "

const drawBoard = (size) => {
let char
for(i = 0; i < boardSize; i++) char += drawChar
console.log(char);
for(i = 0; i < size - 2; i++) console.log(drawChar + drawBlank.repeat(size-2) + drawChar)
console.log(drawChar.repeat(boardSize));
}

drawBoard(boardSize);

