//count
const count = () => {
    for(i = 0; i <= 10; i++) console.log(i)
}
    count()

//reverseCount
const reverseCount = () =>{
    for(i = 10; i >= 0; i--) console.log(i)
}
    reverseCount()

//negativeCount
const negativeCount = () =>{
    for(i = 0; i >= -10; i--) console.log(i)
}
    negativeCount()

//stepCount
const stepCount = () =>{
    for(i = 0; i <= 10; i+=2) console.log(i)
}
    stepCount()

//customRepeat
const customRepeat = (symbol, count) => {
    let result = ''
    for(i = 0; i<count; i++) result += symbol
    return result
}
console.log(customRepeat('*', 5)) // => '*****'