/* Contains
Find element in a list. The function returns true if element is present in arr. Otherwise - false */

const numbers = [1, 69, 420]

const contains = (element, arr) => {
    //let lengthBeforeFilter = arr.length;
    //let filteredArray = arr.filter(x => x != element)

    //return lengthBeforeFilter !== filteredArray.length
    return arr.length !== arr.filter(x => x != element).length
}

console.log(contains(69, numbers)) // true
console.log(contains(666, numbers)) // false

test('checks if an array contains the given number', () => {
    expect(contains(69, numbers)).toStrictEqual(true);
  });

test('checks if an array contains the given number', () => {
    expect(contains(666, numbers)).toStrictEqual(false);
  });