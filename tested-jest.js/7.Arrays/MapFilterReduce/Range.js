/* Range
Return a list of integers, staring with from and finishing with to inclusive. */

const range = (from, to) => {
    return [...Array(to).keys()].map( i => i+from).filter(i => i <= to);
}

console.log(range(1, 10)) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 9)) // [5, 6, 7, 8, 9]