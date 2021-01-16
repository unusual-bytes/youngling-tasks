const reducer = (accumulator, currentValue) => accumulator + currentValue;

const validateCreditCard = (cardNumber) => { 
    let valid = true;
    cardNumber = cardNumber.replace(/-/g, '');

    if(cardNumber.length != 16) valid = false;
    else if(cardNumber.split('').splice(' ').map(x => Number(x)).reduce(reducer, 0) <= 16) valid = false;
    else if(isNaN(cardNumber)) valid = false;
    else if(cardNumber.split('').splice(' ').filter(x => x === cardNumber[0]).length >= 16) valid = false;
    else if(cardNumber[cardNumber.length-1] %2 == 1) valid = false;

    return valid;
}

console.log(validateCreditCard("9999777788880000")); //valid, OUTPUT: true
console.log(validateCreditCard("6666666666661666")); //valid, OUTPUT: true

console.log(validateCreditCard("a92332119c011112")); //invalid, OUTPUT: false
console.log(validateCreditCard("4444444444444444")); //invalid, OUTPUT: false
console.log(validateCreditCard("1111111111111110")); //invalid, OUTPUT: false
console.log(validateCreditCard("6666666666666661")); //invalid, OUTPUT: false

console.log(validateCreditCard("9999-7777-8888-0000")); //valid, OUTPUT: true
console.log(validateCreditCard("6666-6666-6666-1666")); //valid, OUTPUT: true

/* validateCreditCard
Implement a function called validateCreditCard that returns true or false, whether it is valid or not.

Here are the rules for a valid number:

Number must be 16 digits, all of them must be numbers You must have at least two different digits represented (all of the digits cannot be the same) The final digit must be even The sum of all the digits must be greater than 16 The following credit card numbers are valid:

9999777788880000 6666666666661666

The following credit card numbers are invalid:

a92332119c011112 invalid characters 4444444444444444 only one type of number 1111111111111110 sum less than 16 6666666666666661 odd final number

A valid credit card number may also contain dashes, to make a card number easier to read. For example, the following credit card numbers are now also valid:

9999-7777-8888-0000 6666-6666-6666-1666 */ 