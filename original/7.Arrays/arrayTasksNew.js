//Array tasks (new)

//doubled

const doubled = (arr) => { return arr.map(x => x*2) }

console.log(doubled([1, 2, 3, 4])) // => [2, 4, 6, 8]
console.log(doubled([5, 5])) // => [10, 10]

//multiplier

const multiplier = (arr) =>{ return arr.map(x => x*x) }

console.log(multiplier([1, 2, 3, 4])) // => [1, 4, 9, 16]
console.log(multiplier([5, 5])) // => [25, 25]

//lengthifier

const lengthifier = (arrText) => { return arrText.map(x => x.length) }

console.log(lengthifier(['dog', 'snake', 'elephant', 'cat'])) // => [3, 5, 8, 3]

//filterEven

const filterEven = (arr) => { return arr.filter(x => x%2===0) }

console.log(filterEven([2, 3, 9, 10, 12])) // => [2, 10, 12]

//filterPalindrome

const filterPalindrome = (str) =>{    
    let reversedStr = str.map(x => x.toString().toLowerCase())
    let normalStr = str.map(y => y.toString().toLowerCase().split('').reverse().join(''))

    let result = []

    normalStr = normalStr.filter(function(item){
        if(reversedStr.filter(x => x === item) != "") result.push(reversedStr.filter(x => x === item)) 
    });

    return result
}

console.log(filterPalindrome(['demigod', 'rewire', 'madam', 'freer', 'anutforajaroftuna', 'kiosk'])) // => ['madam', 'anutforajaroftuna']

    //sum

    const sum = (arr) => {
        let result = 0
        return result
    }
    
    console.log(sum([1, 2, 3, 4, 5])) // => 15

    //concat

    const flatten = (arr) => {
        return arr.toString().split(',').join('')
    }
    
    console.log(flatten([1, 'cat', 3, 4, 5])) // => '1cat345'

    //flatten

    const flatten2 = (arr, arr2, arr3) => {
        let arrayResult = [arr, arr2, arr3]
        return [arr, arr2, arr3].map(x => x.join())
    }

    console.log(flatten2(['cat', 'dog'], [true], [4, 5, 6])) // => ['cat', 'dog', true, 4, 5, 6]