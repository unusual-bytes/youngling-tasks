const consoleSpy = jest.spyOn(console, 'log');
//6. Library

const book = {
    "Learn You a Haskell": 0,
    "The Healthy Programmer": 50,
    "Code Complete": 60,
    "The Pragmatic Programmer": 20,
    "Pro Git": 0,
    "Introduction to Algorithms": 80,
    "Concrete Mathematics": 100
} 

console.log(book)

let bookSum = book["Code Complete"] + book["Concrete Mathematics"] + book["Introduction to Algorithms"] + book["Learn You a Haskell"] + book["Pro Git"] + book["The Healthy Programmer"] + book["The Pragmatic Programmer"]
console.log(bookSum)
console.log(bookSum - bookSum*0.25) //price with discount

test('the sum of all of the books', () => {
    expect(bookSum).toBe(310);
    });

test('prints the price with discount', () => {
    expect(consoleSpy).toHaveBeenCalledWith(232.5);
    });
