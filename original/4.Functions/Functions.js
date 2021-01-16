//Functions

//Multiply function
const multiply = (firstNumber, secondNumber) => { return firstNumber * secondNumber }
console.log(multiply(1,2))

//Celsius to Fahrenheit converter function
const celsiusToFahrenheit = (celsiusNumber) => { return celsiusNumber*1.8+32 }
console.log(celsiusToFahrenheit(30)) //30 degrees Celsius = 86 degrees Fahrenheit

//Fahrenheit to Celsius converter function
const fahrenheitToCelsius = (fahrenheitNumber) => { return (fahrenheitNumber-32)/1.8 }
console.log(fahrenheitToCelsius(86)) //86 degrees Fahrenheit = 30 degrees Celsius

//Mailify
const mailify = (name) => { return name + '@mail.com' }
console.log(mailify('myemail.test')) // => 'myemail.test@mail.com'