//Array tasks (new)

//doubled

const doubled = (arr) => { return arr.map(x => x*2) }

console.log(doubled([1, 2, 3, 4])) // => [2, 4, 6, 8]
console.log(doubled([5, 5])) // => [10, 10]

test('doubles the array', () => {
    expect(doubled([1, 2, 3, 4])).toStrictEqual([2, 4, 6, 8]);
  });
test('doubles the array', () => {
    expect(doubled([5, 5])).toStrictEqual([10, 10]);
  });

//multiplier

const multiplier = (arr) =>{ return arr.map(x => x*x) }

console.log(multiplier([1, 2, 3, 4])) // => [1, 4, 9, 16]
console.log(multiplier([5, 5])) // => [25, 25]

test('multiplies the array', () => {
    expect(multiplier([1, 2, 3, 4])).toStrictEqual([1, 4, 9, 16]);
  });
test('multiplies the array', () => {
    expect(multiplier([5, 5])).toStrictEqual([25, 25]);
  });

//lengthifier

const lengthifier = (arrText) => { return arrText.map(x => x.length) }

console.log(lengthifier(['dog', 'snake', 'elephant', 'cat'])) // => [3, 5, 8, 3]

test('counts the letters in the array of words and returns the words as numbers of their count', () => {
    expect(lengthifier(['dog', 'snake', 'elephant', 'cat'])).toStrictEqual([3, 5, 8, 3]);
  });

//filterEven

const filterEven = (arr) => { return arr.filter(x => x%2===0) }

console.log(filterEven([2, 3, 9, 10, 12])) // => [2, 10, 12]

test('filters the even numbers from an array', () => {
    expect(filterEven([2, 3, 9, 10, 12])).toStrictEqual([2, 10, 12]);
  });

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

// test('filters the palindrome words in an array', () => {
//     expect(filterPalindrome(['demigod', 'rewire', 'madam', 'freer', 'anutforajaroftuna', 'kiosk'])).toBe(['madam', 'anutforajaroftuna']);
//   });

    //sum
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    const sum = (arr) => {
      return Object.values(arr).map(x => Number(x)).reduce(reducer, 0)
    }
    
    console.log(sum([1, 2, 3, 4, 5])) // => 15

    test('sums all of the numbers in an array', () => {
        expect(sum([1, 2, 3, 4, 5])).toStrictEqual(15);
      });

    //concat

    const flatten = (arr) => {
        return arr.toString().split(',').join('')
    }
    
    console.log(flatten([1, 'cat', 3, 4, 5])) // => '1cat345'

    test('flattens all of the elements in an array', () => {
        expect(flatten([1, 'cat', 3, 4, 5])).toBe('1cat345');
      });

    //flatten

    const flatten2 = (arr, arr2, arr3) => {
        let arrayResult = [arr, arr2, arr3]
        return [arr, arr2, arr3].map(x => x.join())
    }

    console.log(flatten2(['cat', 'dog'], [true], [4, 5, 6])) // => ['cat', 'dog', true, 4, 5, 6]

    // test('flatten2', () => {
    //     expect(flatten2(['cat', 'dog'], [true], [4, 5, 6])).toBe(['cat', 'dog', true, 4, 5, 6]);
    //   });