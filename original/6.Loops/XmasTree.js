//xmas tree

const xmasTree = (size) =>{
    const angel = '   _    \n  {\\o/}  \n   /_\\   '
    let star = ""
    let empty = ""
    let isSpecial = false;

    for(i = 0; i < size; i+=2)
    {
         isSpecial = !isSpecial

         star = printLine(i, size, true, isSpecial)
         if(size%2===0) empty = printLine((size - i) /2 - 1, size, false)
         else empty = printLine((size - i) /2, size, false)

         if(i===0) console.log(angel)
         else console.log(empty + star + empty)

    }
}

const printLine = (i, size, isStar, isSpecial) =>{
    let special = ""
    
    if(isStar && !isSpecial) return '*'.repeat(i)
    else if(!isStar && !isSpecial) return ' '.repeat(i)

    if(isSpecial){
        for(y = 0; y < i; y++){
            if(y === 0 || y === i - 1) special += 'o'
            else special += '*'
        }
      return special
    }
}

xmasTree(9)