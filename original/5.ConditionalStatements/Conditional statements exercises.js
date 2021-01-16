//Conditional statements exercises

//max
const max = (a,b) => {
    if(a > b) return a 
    else return b
}

console.log(max(5, 6)) // => 6
console.log(max(0, -5)) // => 0

//isLegal
const EU = "EU"
const US = "US"

const isLegal = (num,country) => {
    if(country === "EU" && num >= 18) return "legal"
    else if(country === "EU" && num < 18) return "illegal"
    if(country === "US" && num >= 21) return "legal"
    else if(country === "US" && num < 21) return "illegal"
}

console.log(isLegal(17, EU)) // => 'illeagal'
console.log(isLegal(18, EU)) // => 'legal'
console.log(isLegal(18, US)) // => 'illegal'
console.log(isLegal(21, US)) // => 'legal'

//isEven
const isEven = (number) => { return number%2==0 }

console.log(isEven(73)) // => false
console.log(isEven(0)) // => true
console.log(isEven(16)) // => true

//startEndF
const startEndF = (text) => { return text[0] == 'F' && text[text.length - 1] == 'F' }

console.log(startEndF('FarF')) // => true
console.log(startEndF('Foo')) // => false
console.log(startEndF(' FooF')) // => false

//calculator
const calculator = (leftOperand, rightOperand, sign) => {
    switch(sign) {
        case '+':
            return leftOperand + rightOperand
    break;
        case '-':
            return leftOperand - rightOperand
    break;
        case '/':
            return leftOperand / rightOperand
    break;
        case '*':
            return leftOperand * rightOperand
    break;
        default:
            return "wrong sign"
    }
}

console.log(calculator(5, 6, '+')) // => 11
console.log(calculator(30, 5, '/')) // => 6
console.log(calculator(5, 6, '*')) // => 30
console.log(calculator(5, 6, '-')) // => -1