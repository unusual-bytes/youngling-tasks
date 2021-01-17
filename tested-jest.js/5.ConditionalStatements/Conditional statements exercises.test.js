//Conditional statements exercises

//max
const max = (a,b) => {
    if(a > b) return a 
    else return b
}

console.log(max(5, 6)) // => 6
console.log(max(0, -5)) // => 0

test('returns the biggest number out of 2', () => {
    expect(max(5, 6)).toBe(6);
  });

test('returns the biggest number out of 2', () => {
    expect(max(0, -5)).toBe(0);
  });

//isLegal
const EU = "EU"
const US = "US"

const isLegal = (num,country) => {
    if(country === "EU" && num >= 18) return "legal"
    else if(country === "EU" && num < 18) return "illegal"
    if(country === "US" && num >= 21) return "legal"
    else if(country === "US" && num < 21) return "illegal"
}

console.log(isLegal(17, EU)) // => 'illegal'
console.log(isLegal(18, EU)) // => 'legal'
console.log(isLegal(18, US)) // => 'illegal'
console.log(isLegal(21, US)) // => 'legal'

test('checks if the age is legal', () => {
    expect(isLegal(17, EU)).toBe(`illegal`);
  });
  test('checks if the age is legal', () => {
    expect(isLegal(18, EU)).toBe(`legal`);
  });
  test('checks if the age is legal', () => {
    expect(isLegal(18, US)).toBe(`illegal`);
  });
  test('checks if the age is legal', () => {
    expect(isLegal(21, US)).toBe(`legal`);
  });

//isEven
const isEven = (number) => { return number%2==0 }

console.log(isEven(73)) // => false
console.log(isEven(0)) // => true
console.log(isEven(16)) // => true

test('checks if the number is even, returns true or false', () => {
    expect(isEven(73)).not.toBe(true);
  });
  test('checks if the number is even, returns true or false', () => {
    expect(isEven(0)).toBe(true);
  });
  test('checks if the number is even, returns true or false', () => {
    expect(isEven(16)).toBe(true);
  });

//startEndF
const startEndF = (text) => { return text[0] == 'F' && text[text.length - 1] == 'F' }

console.log(startEndF('FarF')) // => true
console.log(startEndF('Foo')) // => false
console.log(startEndF(' FooF')) // => false

test('checks if the given text starts and ends with capital F', () => {
    expect(startEndF('FarF')).toBe(true);
  });
test('checks if the given text starts and ends with capital F', () => {
    expect(isEven('Foo')).not.toBe(true);
  });
test('checks if the given text starts and ends with capital F', () => {
    expect(isEven(' FooF')).not.toBe(true);
  });

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

test('calculates and returns the value', () => {
    expect(calculator(5, 6, '+')).toBe(11);
  });
  test('calculates and returns the value', () => {
    expect(calculator(30, 5, '/')).toBe(6);
  });
  test('calculates and returns the value', () => {
    expect(calculator(5, 6, '*')).toBe(30);
  });
  test('calculates and returns the value', () => {
    expect(calculator(5, 6, '-')).toBe(-1);
  });