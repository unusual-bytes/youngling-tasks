let star = "*"
let blank = " "

const staircase = (size, reverse) =>{
if(reverse)
for(i = 0; i < size; i++) console.log(blank.repeat(size-i-1) + stringBuild(star, i))
else 
for(i = 0; i < size; i++) console.log(stringBuild(star, i) + blank.repeat(size-i-1));
}

const stringBuild = (string, amount) => {
let stringBuilt = string
for(i = 0; i < amount; i++) stringBuilt += string
return stringBuilt
}

staircase(5, true);