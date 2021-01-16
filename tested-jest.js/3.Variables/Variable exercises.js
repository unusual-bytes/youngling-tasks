//Variable exercises

//2. Sums and counts

let count = 1;
let sum = 3;
sum = count + sum;
count = sum + count;
console.log(`sum: ${sum} count: ${count}`)

//3. Discounts

sum = 500
discount = 0.25

console.log(`AMD Ryzen 7 5800x \nЦена: ${sum} \nНамаление: ${(sum - sum*discount)} (-${discount}%)`)

//4. Negative sum

sum = 500
console.log(`Negative sum: ${-sum}`)

//5. Names

firstName = "John"
secondName = "Atanasov"

console.log(firstName, secondName)

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


