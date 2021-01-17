//Functions

//Multiply function
const multiply = (firstNumber, secondNumber) => { return firstNumber * secondNumber }
console.log(multiply(1,2))

test('multiplies 1 and 2 to equal 2', () => {
    expect(multiply(1, 2)).toBe(2);
  });

//Celsius to Fahrenheit converter function
const celsiusToFahrenheit = (celsiusNumber) => { return celsiusNumber*1.8+32 }
console.log(celsiusToFahrenheit(30)) //30 degrees Celsius = 86 degrees Fahrenheit

test('converts celsius to fahrenheit, 30 to 86', () => {
    expect(celsiusToFahrenheit(30)).toBe(86);
  });

//Fahrenheit to Celsius converter function
const fahrenheitToCelsius = (fahrenheitNumber) => { return (fahrenheitNumber-32)/1.8 }
console.log(fahrenheitToCelsius(86)) //86 degrees Fahrenheit = 30 degrees Celsius

test('converts Fahrenheit to Celsius, 86 to 30', () => {
    expect(fahrenheitToCelsius(86)).toBe(30);
  });

//Mailify
const mailify = (name) => { return name + '@mail.com' }
console.log(mailify('myemail.test')) // => 'myemail.test@mail.com'

test('mailify, myemail.test@mail.com', () => {
    expect(mailify('myemail.test')).toBe(`myemail.test@mail.com`);
  });