let star = "*"
let blank = " "

const drawPyramid = (size) =>{
let starWithinFunc = "";
let blankWithinFunc = "";

for(i = size; i >= 0; i--){
blankWithinFunc = blank.repeat((size-i)/2);
starWithinFunc = star.repeat(i);

if(i%2 != 0)
console.log(blankWithinFunc + starWithinFunc + blankWithinFunc);
}
}

drawPyramid(40);